const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String
  }, // Optional: Add category field if applicable
  instructor: {
    type: String
  },  // Optional: Add instructor field if applicable
  // Add more fields as needed (e.g., image URL, duration, price)
});

module.exports = mongoose.model('Course', courseSchema);
