const Course = require('../models/CourseModel');
const mongoose = require('mongoose')

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

const deleteCourse = async (req, res) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: 'Invalid ID' });
  } else {
    const course = await Course.findOneAndDelete({ _id: id });

    if (!course) {
      res.status(400).json({ error: 'No such course' });
    } else {
      res.status(200).json(course);
    }
  }
}

const editCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: 'Invalid ID' });
  } else {
    const course = await Course.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!course) {
      res.status(400).json({ error: 'No such course' });
    } else {
      res.status(200).json(course);
    }
  }
};

const getAllCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });
  res.status(200).json(courses);
};


module.exports = { getAllCourses, postCourse, deleteCourse, editCourse };
