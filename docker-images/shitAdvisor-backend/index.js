/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

// Get routes
const users = require('./routes/users');
//const restrooms = require('./routes/restrooms');

const connectWithRetry = require('./mongodb');

mongoose.set('useFindAndModify', false);

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Connect to MongoDB
connectWithRetry();

// Unprotected routes
app.use('/users', users);
//app.use('/restrooms', restrooms);

// Protected routes

// catch 404 and forward to error handler
app.use((req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(404).send('Not found');
});

// error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  // render the error page
  res.status(err.status || 500);
  console.log(err.message);
});

server.listen(8081, () => {
  console.log('listening on port 8081...');
});
