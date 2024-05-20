const Course = require('../models/CourseModel');

const postCourse = async (req, res) => {
  const { title, description, category, instructor } = req.body;

  const course = await Course.create({
    title,
    description,
    category,
    instructor,
  });
  res.status(200).json(course);
};

const getAllCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });
  res.status(200).json(courses);
};


module.exports = { getAllCourses, postCourse };
