let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require('./api-routes');
let cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://cinemapwa-db-cinemapwa-api.7e14.starter-us-west-2.openshiftapps.com/cinemapwa-db', { useNewUrlParser: true });
const db = mongoose.connection;
const ip = process.env.IP || '0.0.0.0';
const port = process.env.PORT || 8080;
app.use(cors());
app.use('/api', apiRoutes);
app.listen(port, ip, () => console.log(`Running on ${ip}:${port}`));