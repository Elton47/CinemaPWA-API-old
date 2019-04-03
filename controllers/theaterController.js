const Theater = require('../models/theaterModel');

exports.index = (req, res) => {
  Theater.get((err, theaters) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(theaters && theaters.filter(theater => theater.validity));
  });
};

exports.new = (req, res) => {
  const theater = new Theater();
  theater.number = req.body.number;
  theater.floor = req.body.floor;
  theater.capacity = req.body.capacity;
  theater.validity = true;
  theater.save((err) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(theater);
  });
};

exports.view = (req, res) => {
  Theater.findById(req.params.id, (err, theater) => {
    if (err) {
      res.send(err);
    }
    if (theater && theater.validity) {
      res.status(200).json(theater);
    }
    res.status(404).json({ message: 'Theater not found!' });
  });
};

exports.update = (req, res) => {
  Theater.findById(req.params.id, (err, theater) => {
    if (err) {
      res.send(err);
    }
    theater.number = req.body.number ? req.body.number : theater.number;
    theater.floor = req.body.floor ? req.body.floor : theater.floor;
    theater.capacity = req.body.capacity ? req.body.capacity : theater.capacity;
    theater.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(theater);
    });
  });
};

exports.delete = (req, res) => {
  Theater.findById(req.params.id, (err, theater) => {
    if (err) {
      res.send(err);
    }
    theater.validity = false;
    theater.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(theater);
    });
  });
};

exports.restore = (req, res) => {
  Theater.findById(req.params.id, (err, theater) => {
    if (err) {
      res.send(err);
    }
    theater.validity = true;
    theater.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(theater);
    });
  });
};