const express = require('express');
const { getReviews, createReviews, getReview } = require('../controllers/ReviewController');
const { auth } = require('../Middleware/Auth');

const reviewRouter = express.Router();

reviewRouter.get('/', getReviews);
reviewRouter.post('/', auth, createReviews);
reviewRouter.get('/:id', auth, getReview);

module.exports = reviewRouter;
