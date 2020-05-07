const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getUser,
  loginUser,
  registerUser,
  createProfile,
  createProfileSkill,
  deleteSkill,
  createProfileProject,
  getMessages,
  deleteProject,
  createProfileExperience,
  deleteExperience,
  deleteMessage,
  updatePage,
  createPage,
  deletePage
} = require('../controllers/auth');

router.route('/').get(auth, getUser).post(loginUser);

router.route('/messages').get(auth, getMessages);

router.route('/register').post(registerUser);

router.route('/createprofile').post(auth, createProfile);

router.route('/createskill').put(auth, createProfileSkill);

router.route('/deleteskill/:_id').delete(auth, deleteSkill);

router.route('/createprofileexperience').put(auth, createProfileExperience);

router.route('/deleteexperience/:_id').delete(auth, deleteExperience);

router.route('/deletemessage/:_id').delete(auth, deleteMessage);

router.route('/createproject').put(auth, createProfileProject);

router.route('/deleteproject/:_id').delete(auth, deleteProject);

router.route('/createpage').post(auth, createPage);

router.route('/updatepage/:_id').post(auth, updatePage);

router.route('/deletepage/:_id').delete(auth, deletePage);

module.exports = router;
