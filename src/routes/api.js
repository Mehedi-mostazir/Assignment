const express = require('express');
const router = express.Router();


const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');
const messageController = require('../controllers/messageController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');


router.post('/blogs', blogController.create);
router.get('/blogs/:id', blogController.read);
router.put('/blogs/:id', blogController.update);
router.delete('/blogs/:id', blogController.delete);

router.post('/blogs', commentController.create);
router.get('/blogs/:id', commentController.read);
router.put('/blogs/:id', commentController.update);
router.delete('/blogs/:id', commentController.delete);

router.post('/blogs', messageController.create);
router.get('/blogs/:id', messageController.read);
router.put('/blogs/:id', messageController.update);
router.delete('/blogs/:id', messageController.delete);

router.post('/blogs', portfolioController.create);
router.get('/blogs/:id', portfolioController.read);
router.put('/blogs/:id', portfolioController.update);
router.delete('/blogs/:id', portfolioController.delete);

router.post('/blogs', productController.create);
router.get('/blogs/:id', productController.read);
router.put('/blogs/:id', productController.update);
router.delete('/blogs/:id', productController.delete);


module.exports = router;