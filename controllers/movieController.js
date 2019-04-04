const Movie = require('../models/movieModel');

exports.index = (req, res) => {
  Movie.get((err, movies) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(movies && movies.filter(movie => movie.validity));
  });
};

exports.new = (req, res) => {
  const movie = new Movie();
  movie.name = req.body.name;
  movie.director = req.body.director;
  movie.description = req.body.description;
  movie.duration = req.body.duration;
  movie.year = req.body.year;
  movie.rating = req.body.rating;
  movie.ratingUrl = req.body.ratingUrl;
  movie.avatarUrl = req.body.avatarUrl;
  movie.thumbnailUrl = req.body.thumbnailUrl;
  movie.trailerUrl = req.body.trailerUrl;
  movie.category = req.body.category;
  movie.validity = true;
  movie.save((err) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(movie);
  });
};

exports.view = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.send(err);
    }
    if (movie && movie.validity) {
      res.status(200).json(movie);
    }
    res.status(404).json({ message: 'Movie not found!'});
  });
};

exports.update = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.send(err);
    }
    movie.name = req.body.name ? req.body.name : movie.name;
    movie.director = req.body.director ? req.body.director : req.body.director;
    movie.description = req.body.description ? req.body.description : movie.description;
    movie.duration = req.body.duration ? req.body.duration : movie.duration;
    movie.year = req.body.year ? req.body.year : movie.year;
    movie.rating = req.body.rating ? req.body.rating : movie.rating;
    movie.ratingUrl = req.body.ratingUrl ? req.body.ratingUrl : movie.ratingUrl;
    movie.avatarUrl = req.body.avatarUrl ? req.body.avatarUrl : movie.avatarUrl;
    movie.thumbnailUrl = req.body.thumbnailUrl ? req.body.thumbnailUrl : movie.thumbnailUrl;
    movie.trailerUrl = req.body.trailerUrl ? req.body.trailerUrl : movie.trailerUrl;
    movie.category = req.body.category ? req.body.category : movie.category;
    movie.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(movie);
    });
  });
};

exports.delete = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.send(err);
    }
    movie.validity = false;
    movie.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(movie);
    });
  });
};

exports.restore = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.send(err);
    }
    movie.validity = true;
    movie.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json(movie);
    });
  });
};