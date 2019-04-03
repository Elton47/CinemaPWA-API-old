let router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    status: 'API is working',
    message: 'Welcome to CinemaPWA-API'
  });
});

// Categories
const categoryController = require('./controllers/categoryController');
router.route('/categories')
  .get(categoryController.index)
  .post(categoryController.new);
router.route('/categories/:id')
  .get(categoryController.view)
  .patch(categoryController.update)
  .put(categoryController.update)
  .delete(categoryController.delete);
router.route('/categories/:id/restore').patch(categoryController.restore);

// Theaters
const theaterController = require('./controllers/theaterController');
router.route('/theaters')
  .get(theaterController.index)
  .post(theaterController.new);
router.route('/theaters/:id')
  .get(theaterController.view)
  .patch(theaterController.update)
  .put(theaterController.update)
  .delete(theaterController.delete);
router.route('/theaters/:id/restore').patch(theaterController.restore);

// Movies
const movieController = require('./controllers/movieController');
router.route('/movies')
  .get(movieController.index)
  .post(movieController.new);
// router.route('/movies/:id')
//   .get(movieController.view)
//   .patch(movieController.update)
//   .put(movieController.update)
//   .delete(movieController.delete);
// router.route('/movies/:id/restore').patch(movieController.restore);

module.exports = router;