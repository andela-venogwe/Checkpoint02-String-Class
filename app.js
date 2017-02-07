const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use((req, res) => res.status(404).redirect('/'));

module.exports = app;
