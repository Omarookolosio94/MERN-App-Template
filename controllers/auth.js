const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const normalize = require('normalize-url');

// @desc    Get auth user
// @route   GET /api/matrix/auth
// @access  Private
// exports.getUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');

//     return res.status(200).json({
//       success: true,
//       count: user.length,
//       data: user
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       error: 'Server Error'
//     });
//   }
// };
