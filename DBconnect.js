const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb://127.0.0.1:27017/BusinessDB", {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;