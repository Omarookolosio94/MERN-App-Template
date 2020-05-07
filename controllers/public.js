const Profile = require('../models/Profile');
const Message = require('../models/Message');
const Page = require('../models/Page');

// @desc    Get Profile
// @route   GET /api/matrix/profile
// @access  Public
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.find();

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

// @desc    Get Pages
// @route   GET /api/matrix/pages
// @access  Public
exports.getPages = async (req, res, next) => {
  try {
    const pages = await Page.find().sort({ updateDate: -1 });

    return res.status(200).json({
      success: true,
      count: pages.length,
      data: pages
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get Page By Id
// @route   GET /api/matrix/page/:_id
// @access  Public
exports.getPageById = async (req, res, next) => {
  try {
    const page = await Page.findById(req.params._id);

    if (!page) {
      return res.status(404).json({
        success: false,
        error: 'Page Not Found'
      });
    }
    return res.status(200).json({
      success: true,
      count: page.length,
      data: page
    });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({
        success: false,
        error: 'Page not Found'
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Get Page By pageName
// @route   GET /api/matrix/page/name/:_name
// @access  Public
exports.getPageByName = async (req, res, next) => {
  try {
    const page = await Page.findOne({ pageName: req.params._name });

    if (!page) {
      return res.status(404).json({
        success: false,
        error: 'Page Not Found'
      });
    }
    return res.status(200).json({
      success: true,
      count: page.length,
      data: page
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Post  Message
// @route   POST /api/matrix/contact
// @access  Public
exports.createMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = {
      message
    };

    if (name) {
      newMessage.name = name;
    } else {
      newMessage.name = 'Anonymous';
    }
    if (email) newMessage.email = email;
    newMessage.sentDate = Date.now();

    await Message.create(newMessage);

    return res.status(200).json({
      success: true,
      data: 'Message Sent '
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
