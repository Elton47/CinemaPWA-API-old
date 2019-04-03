const Category = require('../models/categoryModel');

exports.index = (req, res) => {
  Category.get((err, categories) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(categories && categories.filter(category => category.validity));
  });
};

exports.new = (req, res) => {
  const category = new Category();
  category.name = req.body.name;
  category.validity = true;
  category.save((err) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(category);
  });
};

exports.view = (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      res.send(err);
    }
    if (category && category.validity) {
      res.status(200).json(category);
    }
    res.status(404).json({ message: 'Category not found!' });
  });
};

exports.update = (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      res.send(err);
    }
    category.name = req.body.name ? req.body.name : category.name;
    category.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(category);
    });
  });
};

exports.delete = (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      res.send(err);
    }
    category.validity = false;
    category.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(category);
    });
  });
};

exports.restore = (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      res.send(err);
    }
    category.validity = true;
    category.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(category);
    });
  });
};