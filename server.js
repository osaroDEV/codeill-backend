// import dotenv
require('dotenv').config();

const cors = require('cors');

// import express
const express = require('express');

// create app from express
const app = express();

// apply CORS middleware to all routes
app.use(cors());

// access req.body
app.use(express.json());

// import mongoose
const mongoose = require('mongoose');

// import info router
const infoRouter = require('./routes/infoRoutes');


// import course router
const courseRouter = require('./routes/courseRoutes');

// access info routes
app.use('/', infoRouter)

// access course routes
app.use('/courses', courseRouter)

// connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  // listen to port
  app.listen(process.env.PORT, () => {
    console.log(`connected to database & listening to PORT ${process.env.PORT}`);
  });
});