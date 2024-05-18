const express = require('express');
const Course = require('../models/CourseModel'); // Assuming your model is in a separate file

const router = express.Router();

// Search Courses Endpoint
router.get('/search', async (req, res) => {
  try {
    const { title } = req.query; // Capture search term from query string
    const query = title ? { title: { $regex: title, $options: 'i' } } : {}; // Search by title (case-insensitive)
    const courses = await Course.find(query);
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

router.post('/courses', async (req, res) => {
    const { title, description, category, instructor } = req.body;
  
    const course = await Course.create({ title, description, category, instructor });
    res.status(200).json(course);
  });
module.exports = router;
