const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  validity: Boolean
});

const Category = module.exports = mongoose.model('category', categorySchema);

module.exports.get = (callback, limit) => Category.find(callback).limit(limit);