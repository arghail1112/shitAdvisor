const mongoose = require('mongoose');
const conf = require('./conf').default;

const mongoOptions = {
  useNewUrlParser: true,
  reconnectTries: conf.db.reconnectTries,
  reconnectInterval: conf.db.reconnectInterval,
};

const mongoUrl = conf.db.url;

// MongoDB connection with retry
const connectWithRetry = () => {
  mongoose.connect(mongoUrl, mongoOptions)
    .then(
      () => {
        console.log('Connected to MongoDB');
      },
      (err) => {
        console.error('Failed to connect to MongoDB', err);
        setTimeout(connectWithRetry, 5000);
      },
    );
};

module.exports = connectWithRetry;
