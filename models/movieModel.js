const mongoose = require('mongoose');
const Category = require('./categoryModel').Category;

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  ratingUrl: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  trailerUrl: {
    type: String,
    required: true
  },
  category: {
    type: Category,
    required: true
  },
  validity: Boolean
});

const Movie = module.exports = mongoose.model('movie', movieSchema);

module.exports.get = (callback, limit) => Movie.find(callback).limit(limit);

module.exports.Movie = movieSchema;