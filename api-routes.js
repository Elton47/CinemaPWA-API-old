let router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    status: 'API is working',
    message: 'Welcome to CinemaPWA-API'
  });
});

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
module.exports = router;