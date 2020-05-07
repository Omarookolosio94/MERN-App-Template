const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    //Get the Token From Header
    const token = req.header('x-auth-token');

    //Check if No token
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Not Authorized'
      });
    }

    //Verify Token
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    req.user = decoded.user;

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: 'Not Authorized'
    });
  }
};
