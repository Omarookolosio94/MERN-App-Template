const express = require('express');
const router = express.Router();
const {
  getProfile,
  createMessage,
  getPages,
  getPageById,
  getPageByName
} = require('../controllers/public');

router.route('/profile').get(getProfile);

router.route('/contact').post(createMessage);

router.route('/pages').get(getPages);

router.route('/page/:_id').get(getPageById);

router.route('/page/name/:_name').get(getPageByName);

module.exports = router;
