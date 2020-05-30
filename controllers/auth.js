const User = require('../models/User');
const Message = require('../models/Message');
const Page = require('../models/Page');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const normalize = require('normalize-url');

// @desc    Get auth user
// @route   GET /api/matrix/auth
// @access  Private
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    return res.status(200).json({
      success: true,
      count: user.length,
      data: user
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get Messages
// @route   GET /api/matrix/auth/messages
// @access  Private
exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ sentDate: -1 });

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Sign In User
// @route   POST api/matrix/auth
// @access  Public
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Credentials'
      });
    }

    //compare password for match
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Credentials'
      });
    }

    //return jsonwebtoken
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: 36000000 },
      (err, token) => {
        if (err) throw err;

        return res.status(201).json({
          success: true,
          data: token
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Register User
// @route   POST api/matrix/auth/register
// @access  Public
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //Check if User Already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Credentials'
      });
    }

    user = new User({
      name,
      email,
      password
    });

    //encrypt password
    if (password) {
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    //return jsonwebtoken
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: 36000000 },
      (err, token) => {
        if (err) throw err;

        return res.status(201).json({
          success: true,
          data: token
        });
      }
    );
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    create Profile
// @route   POST api/matrix/auth/createProfile
// @access  Public
exports.createProfile = async (req, res, next) => {
  try {
    const {
      interest,
      summary,
      email,
      linkedin,
      instagram,
      github,
      phoneNo
    } = req.body;

    const profileFields = {};

    if (interest) {
      profileFields.interest = interest
        .split(',')
        .map((int) => ' ' + int.trim());
    }
    if (summary) profileFields.summary = summary;

    // Build social object and add to profileFields
    const socialfields = { phoneNo, email, linkedin, instagram, github };

    for (const [key, value] of Object.entries(socialfields)) {
      if (value && value.length > 0)
        socialfields[key] = normalize(value, { forceHttps: true });
    }

    profileFields.social = socialfields;

    profileFields.user = req.user.id;
    profileFields.updateDate = Date.now();

    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );

    return res.status(201).json({
      success: true,
      data: profile
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @route    PUT api/matrix/auth/createSkill
// @desc     Create Profile Skill
// @access   Private
exports.createProfileSkill = async (req, res, next) => {
  try {
    const { name, detail, rating, expLength } = req.body;

    const newSkill = {
      name,
      detail,
      rating,
      expLength
    };

    const profile = await Profile.findOne({ user: req.user.id });

    profile.updateDate = Date.now();

    profile.skills.unshift(newSkill);

    await profile.save();

    return res.status(200).json({
      success: true,
      count: profile.length,
      data: profile
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @route    DELETE  api/matrix/auth/deleteskill/:_id
// @desc     Delete Skill from Profile
// @access   Private
exports.deleteSkill = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.skills = profile.skills.filter(
      (skill) => skill._id.toString() !== req.params._id
    );

    await profile.save();

    return res.status(200).json({
      success: true,
      count: profile.length,
      data: profile
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @route    PUT api/matrix/auth/createProject
// @desc     Create Profile Project
// @access   Private
exports.createProfileProject = async (req, res, next) => {
  try {
    const { name, tech, link, features, summary, detail } = req.body;

    const newProject = {
      name,
      summary,
      detail
    };

    if (link) newProject.link = normalize(link, { forceHttps: true });

    if (tech) {
      newProject.tech = tech.split(',').map((tec) => ' ' + tec.trim());
    }

    if (features) {
      newProject.features = features
        .split(',')
        .map((feat) => ' ' + feat.trim());
    }

    const profile = await Profile.findOne({ user: req.user.id });

    profile.updateDate = Date.now();

    profile.projects.unshift(newProject);

    await profile.save();

    return res.status(200).json({
      success: true,
      count: profile.length,
      data: profile
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @route    DELETE  api/matrix/auth/deleteProject/:_id
// @desc     Delete Project from Profile
// @access   Private

exports.deleteProject = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.projects = profile.projects.filter(
      (project) => project._id.toString() !== req.params._id
    );

    await profile.save();

    return res.status(200).json({
      success: true,
      count: profile.length,
      data: profile
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @route    PUT api/matrix/auth/createprofileexperience
// @desc     Create Profile Experience
// @access   Private
exports.createProfileExperience = async (req, res, next) => {
  try {
    const {
      company,
      address,
      position,
      jobDescription,
      companyLink,
      fromDate,
      toDate
    } = req.body;

    const newExp = {
      company,
      position
    };

    if (address) newExp.address = address;
    if (jobDescription) newExp.jobDescription = jobDescription;
    if (companyLink)
      newExp.companyLink = normalize(companyLink, { forceHttps: true });

    newExp.expDate = {};

    if (fromDate) newExp.expDate.fromDate = fromDate;
    if (toDate) newExp.expDate.toDate = toDate;

    const profile = await Profile.findOne({ user: req.user.id });

    profile.updateDate = Date.now();

    profile.experience.unshift(newExp);

    await profile.save();

    return res.status(200).json({
      success: true,
      count: profile.length,
      data: profile
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @route    DELETE  api/matrix/auth/deleteexperience/:_id
// @desc     Delete Experiecnce from Profile
// @access   Private
exports.deleteExperience = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.experience = profile.experience.filter(
      (exp) => exp._id.toString() !== req.params._id
    );

    await profile.save();

    return res.status(200).json({
      success: true,
      count: profile.length,
      data: profile
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @route    DELETE  api/matrix/auth/deletemessage/:_id
// @desc     Delete Message
// @access   Private
exports.deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params._id);

    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message Not Found'
      });
    }

    await message.remove();

    return res.status(200).json({
      success: true,
      data: 'Message Deleted'
    });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({
        success: false,
        error: 'Message not Found'
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Create Pages
// @route   POST api/matrix/auth/createpage
// @access  Public
exports.createPage = async (req, res, next) => {
  try {
    const { pageName, pageTitle, pageSummary } = req.body;

    const newPage = await new Page({
      pageName,
      pageSummary,
      pageTitle,
      updateDate: Date.now()
    });

    const page = await newPage.save();

    return res.status(201).json({
      success: true,
      data: page
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Update Pages
// @route   POST api/matrix/auth/updatepage/_:id
// @access  Public
exports.updatePage = async (req, res, next) => {
  try {
    const page = await Page.findById(req.params._id);

    if (!page) {
      return res.status(404).json({
        success: false,
        error: 'Page Not Found'
      });
    }

    const { pageName, pageTitle, pageSummary } = req.body;

    const newPage = {
      pageName,
      pageSummary,
      pageTitle,
      updateDate: Date.now()
    };

    await page.updateOne(newPage);

    return res.status(201).json({
      success: true,
      data: 'Page Updated'
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else if (err.name === 'CastError') {
      return res.status(404).json({
        success: false,
        error: 'Page Not Found'
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @route    DELETE  api/matrix/auth/deletepage/:_id
// @desc     Delete Page
// @access   Private
exports.deletePage = async (req, res, next) => {
  try {
    const page = await Page.findById(req.params._id);

    if (!page) {
      return res.status(404).json({
        success: false,
        error: 'Page Not Found'
      });
    }

    await page.remove();

    return res.status(200).json({
      success: true,
      data: 'Page Deleted'
    });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({
        success: false,
        error: 'Page Not Found'
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};
