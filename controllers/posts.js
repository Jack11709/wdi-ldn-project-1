const Post = require('../models/post');

function indexRoute(req, res, next) {
  Post
  .find()
  .populate('createdBy')
  .exec()
  .then((posts) => res.render('posts/index', { posts }))
  .catch(next);
}

function newRoute(req, res) {
  return res.render('posts/new');
}

function createRoute(req, res, next) {

  req.body.createdBy = req.user;

  Post
  .create(req.body)
  .then(() => res.redirect('/posts'))
  .catch((err) => {
    if(err.name === 'ValidationError') return res.badRequest(`/posts/new`, err.toString());
    next(err);
  });
}

function showRoute(req, res, next) {
  Post
  .findById(req.params.id)
  .populate('createdBy comments.createdBy')
  .exec()
  .then((post) => {
    if(!post) return res.notFound();
    return res.render('posts/show', { post });
  })
  .catch(next);
}

function editRoute(req, res, next) {
  Post
  .findById(req.params.id)
  .exec()
  .then((post) => {
    if(!post) return res.redirect();
    if(!post.belongsTo(req.user)) return res.unauthorized(`/posts/${post.id}`, 'you do not have permission to edit that resource!');
    return res.render('posts/edit', { post });
  })
  .catch(next);
}

function updateRoute(req, res, next) {
  Post
  .findById(req.params.id)
  .exec()
  .then((post) => {
    if(!post) return res.notFound();

    for(const field in req.body) {
      post[field] = req.body[field];
    }

    return post.save();
  })
  .then(() => res.redirect(`/posts/${req.params.id}`))
  .catch((err) => {
    if(err.name === 'ValidationError') return res.badRequest(`/posts/${req.params.id}/edit`, err.toString());
    next(err);
  });
}

function deleteRoute(req, res, next) {
  Post
  .findById(req.params.id)
  .exec()
  .then((post) => {
    if(!post.belongsTo(req.user)) return res.unauthorized(`/posts/${post.id}`, 'you do not have permission to delete that resource!');
    if(!post) return res.notFound();
    return post.remove();
  })
  .then(() => res.redirect('/posts'))
  .catch(next);
}

function createCommentRoute(req, res, next) {
  req.body.createdBy = req.user;

  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      post.comments.push(req.body);
      return post.save();
    })
    .then((post) => res.redirect(`/posts/${post.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {

  Post
   .findById(req.params.id)
   .exec()
   .then((post) => {
     if(!post) return res.notFound();

     const comment = post.comments.id(req.params.commentId);
     comment.remove();

     return post.save();
   })
   .then((post) => res.redirect(`/posts/${post.id}`))
   .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
