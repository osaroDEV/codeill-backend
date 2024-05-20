const Enquiry = require('../models/EnquiryModel');

const getAllEnquiries = async (req, res) => {
  
  const enquiries = await Enquiry.find({}).sort({createdAt: -1})
  res.status(200).json(enquiries);
};

const postEnquiry = async (req, res) => {
  const { fullName, email, mobile, message } = req.body;

  const enquiry = await Enquiry.create({ fullName, email, mobile, message });
  res.status(200).json(enquiry);
};

// const deleteEnquiry = async (req, res) => {
//   res.status(200).json({ message: 'Enquiry deleted' });
// };

// const editEnquiry = async (req, res) => {
//   res.status(200).json({ message: 'Enquiry changed' });
// };

// const getEnquiry = async (req, res) => {
//   res.status(200).json({ message: 'one Enquiry obtained' });
// };

module.exports = {
  getAllEnquiries,
  postEnquiry,
  // deleteEnquiry,
  // editEnquiry,
  // getEnquiry,
};
