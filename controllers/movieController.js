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