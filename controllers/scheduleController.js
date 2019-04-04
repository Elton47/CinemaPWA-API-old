const Schedule = require('../models/scheduleModel');

exports.index = (req, res) => {
  Schedule.get((err, schedules) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(schedules && schedules.filter(schedule => schedule.validity));
  });
};

exports.new = (req, res) => {
  const schedule = new Schedule();
  schedule.movie = req.body.movie;
  schedule.theater = req.body.theater;
  schedule.date = req.body.date;
  schedule.time = req.body.time;
  schedule.price = req.body.price;
  schedule.validity = req.body.validity;
  schedule.save((err) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(schedule);
  });
};

exports.view = (req, res) => {
  Schedule.findById(req.params.id, (err, schedule) => {
    if (err) {
      res.send(err);
    }
    if (schedule && schedule.validity) {
      res.status(200).json(schedule);
    }
    res.status(404).json({ message: 'Schedule not found!'});
  });
};

exports.update = (req, res) => {
  Schedule.findById(req.params.id, (err, schedule) => {
    if (err) {
      res.send(err);
    }
    schedule.movie = req.body.movie ? req.body.movie : schedule.movie;
    schedule.theater = req.body.theater ? req.body.theater : schedule.theater;
    schedule.date = req.body.date ? req.body.date : schedule.date;
    schedule.time = req.body.time ? req.body.time : schedule.time;
    schedule.price = req.body.price ? req.body.price : schedule.price;
    schedule.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(schedule);
    });
  });
};

exports.delete = (req, res) => {
  Schedule.findById(req.params.id, (err, schedule) => {
    if (err) {
      res.send(err);
    }
    schedule.validity = false;
    schedule.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(schedule);
    });
  });
};

exports.restore = (req, res) => {
  Schedule.findById(req.params.id, (err, schedule) => {
    if (err) {
      res.send(err);
    }
    schedule.validity = true;
    schedule.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(schedule);
    });
  });
};