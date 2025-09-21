const express = require('express')
const path = require('path');

const webRoutes = require('./routes/web');


const app = express()

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(express.static(path.join(__dirname, 'public'))); // css, client files

// routes
app.use('/', webRoutes);


module.exports = app;