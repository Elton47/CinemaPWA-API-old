let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require('./api-routes');
let cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/cinemapwa-api', { useNewUrlParser: true });
const db = mongoose.connection;
const port = process.env.PORT || 8080;
app.use(cors());
app.use('/api', apiRoutes);
app.listen(port, () => console.log('Running on port ' + port));