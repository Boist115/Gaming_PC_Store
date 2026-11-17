class Review {
    constructor(id, customerId, productId, rating, comments) {
        this.id = id;
        this.customerId = customerId;
        this.productId = productId;
        this.rating = rating;
        this.comments = comments;
    }
}

const reviews = [];

function addReview(customerId, productId, rating, comments) {
    const review = new Review(
        reviews.length + 1,
        customerId,
        productId,
        rating,
        comments
    );

    reviews.push(review);
    return review;
}

function getProductReviews(productId) {
    return reviews.filter(review => review.productId === productId);
}

module.exports = { Review, addReview, getProductReviews };