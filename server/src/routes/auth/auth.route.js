const express = require('express');
const router = express.Router();
const passport = require('passport');

const {
    registerUser,
    mailForResendOTP,
    confirmUser,
    loginUser,
    unlockAccount,
    mailForResendUnlockOTP,
    mailForPasswordReset,
    validateOTPForPasswordReset,
    resetUserPassword,
    logoutUser,
    googleCallback,
} = require('./auth.controller');

const {
    authenticate,
    authenticateToken
} = require('../../middleware/auth');

// Jwt Auth
router.post('/register', registerUser);
router.get('/resend_otp', authenticateToken('confirm'), mailForResendOTP);
router.put('/confirm', authenticateToken('confirm'), confirmUser);
router.post('/login', loginUser);
router.put('/unlock_account', unlockAccount);
router.put('/resend_otp_unlock', mailForResendUnlockOTP);
router.post('/forgot_password', mailForPasswordReset);
router.put('/validate_otp', authenticateToken('reset'), validateOTPForPasswordReset);
router.put('/reset_password', authenticateToken('reset'), resetUserPassword);
router.get('/logout', authenticate, logoutUser);

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/v1/auth/failure' }), googleCallback);

// Oauth Auth failure route
router.get('/failure', (req, res) => res.redirect('/v1/auth/google'));

module.exports = router;