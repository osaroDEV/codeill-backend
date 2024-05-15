// import dotenv
require('dotenv').config();

// import express
const express = require('express');

// create app from express
const app = express();

// access req.body
app.use(express.json());

// import mongoose
const mongoose = require('mongoose');

// import router
const infoRouter = require('./routes/infoRoutes');

// access routes
app.use('/', infoRouter)

// connect to database
mongoose.connect(process.env.MONGO_URI).then(() => {
  // listen to port
  app.listen(process.env.URL, () => {
    console.log(`connected to database & listening to PORT`);
  });
});