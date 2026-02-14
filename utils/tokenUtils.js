const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

const generateTokens = async (user) => {
  try {
    // Access token payload
    const accessPayload = {
      userId: user._id,
      email: user.email,
      role: user.role,
      permissions: user.permissions
    };

    // Refresh token payload
    const refreshPayload = {
      userId: user._id
    };

    // Generate tokens
    const accessToken = jwt.sign(
      accessPayload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_ACCESS_EXPIRE }
    );

    const refreshToken = jwt.sign(
      refreshPayload,
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRE }
    );

    // Store refresh token in database
    await Token.create({
      userId: user._id,
      token: refreshToken,
      type: 'refresh',
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error('Error generating tokens');
  }
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const verifyRefreshToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    
    // Check if token exists in database and not blacklisted
    const tokenDoc = await Token.findOne({
      token: token,
      type: 'refresh',
      blacklisted: false
    });

    if (!tokenDoc) {
      return null;
    }

    return decoded;
  } catch (error) {
    return null;
  }
};

const blacklistRefreshToken = async (token) => {
  await Token.findOneAndUpdate(
    { token },
    { blacklisted: true }
  );
};

module.exports = {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
  blacklistRefreshToken
};