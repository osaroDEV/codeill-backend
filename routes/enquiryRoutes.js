const express = require('express');

const {
  getAllEnquiries,
  postEnquiry,
  // deleteInfo,
  // editInfo,
  // getInfo,
} = require('../controllers/enquiryController');

const router = express.Router();

router.get('/', getAllEnquiries);

router.post('/', postEnquiry);

// router.delete('/:id', deleteInfo);

// router.patch('/:id', editInfo);

// router.get('/:id', getInfo);

module.exports = router;
