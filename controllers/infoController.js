const InfoModel = require('../models/InfoModel');

const getAllInfo = async (req, res) => {
  const info = await InfoModel.find({}).sort({createdAt: -1})
  res.status(200).json(info);
};

const postInfo = async (req, res) => {
  const { fullName, email, mobile, message } = req.body;

  const info = await InfoModel.create({ fullName, email, mobile, message });
  res.status(200).json(info);
};

const deleteInfo = async (req, res) => {
  res.status(200).json({ message: 'info deleted' });
};

const editInfo = async (req, res) => {
  res.status(200).json({ message: 'info changed' });
};

const getInfo = async (req, res) => {
  res.status(200).json({ message: 'one info obtained' });
};

module.exports = {
  getAllInfo,
  postInfo,
  deleteInfo,
  editInfo,
  getInfo,
};
