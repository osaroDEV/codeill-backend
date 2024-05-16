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

// import router
const infoRouter = require('./routes/infoRoutes');

// access routes
app.use('/', infoRouter)

// connect to database
mongoose.connect(process.env.MONGO_URI).then(() => {
  // listen to port
  app.listen(process.env.PORT, () => {
    console.log(`connected to database & listening to PORT ${process.env.PORT}`);
  });
});