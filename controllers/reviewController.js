const reviewService = require('../services/reviewService');
const productService = require('../services/productService');

const showReviews = (req, res) => {
    const productId = Number(req.params.productId);

    const product = productService.getAllProducts().find(
        p => p.id === productId
    );

    if (!product) {
        return res.status(404).send('Product not found');
    }

    const reviews = reviewService.getProductReviews(productId);

    res.render('reviews', { product, reviews });
};

const submitReview = (req, res) => {
    const productId = Number(req.params.productId);
    const rating = Number(req.body.rating);
    const comments = req.body.comments;

    const product = productService.getAllProducts().find(
        p => p.id === productId
    );

    if (!product) {
        return res.status(404).send('Product not found');
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5 ||
        typeof comments !== 'string' || !comments.trim()) {
        return res.status(400).send('Invalid review');
    }

    const customerId = req.session.customerId;

if (!customerId) {
    return res.redirect('/register');
}

reviewService.addReview(
    customerId,
    productId,
    rating,
    comments.trim()
);

    res.redirect('/reviews/' + productId);
};

module.exports = { showReviews, submitReview };