const express = require('express');

const {
  getAllInfo,
  postInfo,
  deleteInfo,
  editInfo,
  getInfo,
} = require('../controllers/infoController');

const router = express.Router();

router.get('/', getAllInfo);

router.post('/', postInfo);

router.delete('/:id', deleteInfo);

router.patch('/:id', editInfo);

router.get('/:id', getInfo);

module.exports = router;
