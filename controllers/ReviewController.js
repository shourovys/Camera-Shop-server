const Review = require('../models/ReviewModel');

const ReviewsControllers = {};

ReviewsControllers.getReviews = async (req, res) => {
  try {
    let reviews;
    if (req.query.limited === 'true') {
      reviews = await Review.find().limit(6);
    } else {
      reviews = await Review.find();
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

ReviewsControllers.getReview = async (req, res) => {
  const { id } = req.params;

  try {
    const services = await Review.findById(id);

    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

ReviewsControllers.createReviews = async (req, res) => {
  try {
    const { userId } = req;

    const newReviews = new Review({ userId, ...req.body });

    const saveReviews = await newReviews.save();
    console.log(
      '🚀 ~ file: ReviewController.js ~ line 39 ~ ReviewsControllers.createReviews= ~ saveReviews',
      saveReviews,
    );

    res.status(201).json(saveReviews);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = ReviewsControllers;
