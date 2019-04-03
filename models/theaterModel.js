const mongoose = require('mongoose');

const theaterSchema = mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  validity: Boolean
});

const Theater = module.exports = mongoose.model('theater', theaterSchema);

module.exports.get = (callback, limit) => Theater.find(callback).limit(limit);

module.exports.Theater = theaterSchema;