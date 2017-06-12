const router = require('express').Router();
const sessionsController = require('../controllers/sessions');
const registrationsController = require('../controllers/registration');
const secureRoute = require('../lib/secureRoute');
const postsController = require('../controllers/posts');
const staticsController = require('../controllers/statics');


router.route('/')
  .get(staticsController.index);

router.route('/posts')
  .get(postsController.index)
  .post(secureRoute, postsController.create);

router.route('/posts/new')
  .get(secureRoute, postsController.new);

router.route('/posts/:id')
  .get(postsController.show)
  .put(secureRoute, postsController.update)
  .delete(secureRoute, postsController.delete);

router.route('/posts/:id/edit')
  .get(secureRoute, postsController.edit);

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/users')
  // .get(secureRoute, registrationsController.show)
  .put(secureRoute, registrationsController.update)
  .delete(secureRoute, registrationsController.delete);

router.route('/users/:id')
  .get(registrationsController.show);

router.route('/users/:id/edit')
  .get(secureRoute, registrationsController.edit);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

router.route('/posts/:id/comments')
  .post(secureRoute, postsController.createComment);

router.route('/posts/:id/comments/:commentId')
  .delete(secureRoute, postsController.deleteComment);

router.all('*', (req, res) => res.notFound());

module.exports = router;
