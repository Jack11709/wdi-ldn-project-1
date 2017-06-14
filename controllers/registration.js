const User = require('../models/user');
const Post = require('../models/post');

function newRoute(req, res) {
  return res.render('registrations/new');
}

function createRoute(req, res, next) {
  if(req.file) req.body.image = req.file.key;

  User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest('/register', err.toString());
      next(err);
    });
}

// function showRoute(req, res) {
//   return res.render('registrations/show');
// }

function showRoute(req, res, next ) {
  User
  .findById(req.params.id)
  .exec()
  .then((user) => {
    if(!user) return res.notFound();
    return Post
    .find({ createdBy: user })
    .exec()
    .then((posts) => {
      return res.render('registrations/show', { user, posts });
    });

  })
  .catch(next);
}

// function editRoute(req, res) {
//   return res.render('registrations/edit');
// }

function editRoute(req, res, next ) {
  User
  .findById(req.params.id)
  .exec()
  .then((user) => {
    if(!user) return res.notFound();
    return res.render('registrations/edit', { user });
  })
  .catch(next);
}

function updateRoute(req, res, next) {
  if(req.file) req.body.image = req.file.key;
  for(const field in req.body) {
    req.user[field] = req.body[field];
  }

  req.user.save()
    .then(() => res.redirect(`/`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest('/users/edit', err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  return req.user.remove()
    .then(() => {
      req.session.regenerate(() => res.redirect('/'));
    })
    .catch(next);
}

module.exports = {
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
