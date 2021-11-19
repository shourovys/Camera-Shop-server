const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    userId: String,
    name: String,
    email: String,
    review: String,
    rating: Number,
  },
  { timestamps: true }
);

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
