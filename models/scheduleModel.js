const mongoose = require('mongoose');
const Movie = require('./movieModel').Movie;
const Theater = require('./theaterModel').Theater;

const scheduleSchema = mongoose.Schema({
  movie: {
    type: Movie,
    required: true
  },
  theater: {
    type: Theater,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  validity: Boolean
});

const Schedule = module.exports = mongoose.model('schedule', scheduleSchema);

module.exports.get = (callback, limit) => Schedule.find(callback).limit(limit);

module.exports.Schedule = scheduleSchema;