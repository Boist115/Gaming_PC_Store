const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/:productId', reviewController.showReviews);
router.post('/:productId', reviewController.submitReview);

module.exports = router;