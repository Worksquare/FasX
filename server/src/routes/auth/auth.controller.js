const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../../models/user.model');
const {
    validateCreateUserObject,
    validateLoginCredentials,
    validatePasswordChange,
    validateEmailAddress
} = require('./auth.validation');
const BlacklistToken = require('../../models/blacklistToken.model');
const { storeOTP, verifyOTP, deleteOTP, generateOTP } = require('../../utils/OTP');
const { generateToken } = require('../../utils/token');
const generateAvatar = require('../../utils/generateAvatar');
const sendMail = require('../../utils/sendMail');
const ErrorResponse = require('../../utils/error.response');

/**
 * @desc Register a new user
 * @route POST /v1/auth/register
 * @access Public
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function registerUser(req, res, next) {
    try {
        const { name, email, password, confirmPassword } = req.body;
        const userData = await validateCreateUserObject.parseAsync({ name, email, password, confirmPassword });

        const avatar = generateAvatar(userData.email);
        const user = { ...userData, avatar };
        const savedUser = await UserModel.create(user);

        const otp = generateOTP();
        await storeOTP(savedUser.email, otp);
        await sendMail(otp, savedUser.email, 'register', savedUser.name);
        const accessToken = generateToken(savedUser._id, 'confirm');

        res.status(201).json({
            message: 'User registered successfully',
            accessToken,
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Send mail to resend OTP
 * @route GET /v1/auth/resend_otp
 * @access Private
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function mailForResendOTP(req, res, next) {
    try {
        const { id } = req.user;
        const user = await UserModel.findById(id).select('-password -confirmPassword')
        if (!user) return next(new ErrorResponse('User not found', 404));

        if (!user.isConfirmed) {
            await deleteOTP(user.email);
            const otp = generateOTP();
            await storeOTP(user.email, otp);
            await sendMail(otp, user.email, 'register', user.name);

            res.status(200).json({ message: 'Mail sent successfully' });
        } else {
            next(new ErrorResponse('User already confirmed', 400));
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Confirm user registration with OTP
 * @route PUT /v1/auth/confirm
 * @access Private
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function confirmUser(req, res, next) {
    try {
        const { id } = req.user;
        const { OTP } = req.body;

        const user = await UserModel.findById(id).select('-password -confirmPassword');
        if (!user) return next(new ErrorResponse('User not found', 404));
        if (user.isConfirmed) return next(new ErrorResponse('User Confirmed', 400));


        const storedOTP = await verifyOTP(OTP, user.email);
        if (storedOTP) {
            user.isConfirmed = true;
            await deleteOTP(user.email);
            const updatedUser = await user.save();

            res.status(200).json({
                message: 'OTP verified successfully and User is confirmed',
                user: {
                    id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                }
            });
        } else {
            return next(new ErrorResponse('Invalid OTP', 400))
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @desc User login
 * @route POST /v1/auth/login
 * @access Public
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function loginUser(req, res, next) {
    try {
        const { email, password } = req.body;
        const userData = validateLoginCredentials.parse({ email, password });

        let user = await UserModel.findOne({ email: userData.email });
        if (!user) return next(new ErrorResponse('Incorrect credentials', 404));

        const isMatch = await user.comparePassword(userData.password);
        if (!isMatch) {
            const MaximumLoginAttempts = 7;
            user.loginAttempts += 1;

            if (user.loginAttempts === MaximumLoginAttempts) {
                const otp = generateOTP();
                const hashOTP = await bcrypt.hash(otp, 10);

                user.isLocked = true;
                user.OTPStore = hashOTP;
                await user.save();

                await sendMail(otp, user.email, 'login attempts', user.name);
                
                return next(new ErrorResponse('Account locked due to multiple login attempts. Check your email for unlock instructions.', 400));
            }

            const updatedUser = await user.save();
            const RemainingLoginAttempts = MaximumLoginAttempts - updatedUser.loginAttempts;

            return next(new ErrorResponse(`Invalid credentials... RemainingLoginAttempts =  ${RemainingLoginAttempts}`, 400));
        }

        const accessToken = user.generateAccessToken();
        user.loginAttempts = 0;
        user.lastLogin = new Date();
        await user.save();

        res.json({
            message: 'User login successfully',
            accessToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Resend OTP for account unlock
 * @route PUT /v1/auth/resend_otp_unlock
 * @access Public
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function mailForResendUnlockOTP(req, res, next) {
    try {
        const { email } = req.body;

        const user = await UserModel.findOne({ email }).select('-password -confirmPassword');
        if (!user) return next(new ErrorResponse('User not found', 404));

        if (user.isLocked && user.OTPStore) {
            const otp = generateOTP();
            const hashOTP = await bcrypt.hash(otp, 10);
            
            user.OTPStore = hashOTP;
            await user.save();
            
            await sendMail(otp, user.email, 'login attempts', user.name);

            res.status(200).json({ message: 'Mail sent successfully.' });
        } else {
            return next(new ErrorResponse('Account not locked', 400));
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Validate OTP for account unlock
 * @route PUT /v1/auth/unlock_account
 * @access Public
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function unlockAccount(req, res, next) {
    try {
        const { OTP, email } = req.body;

        const user = await UserModel.findOne({ email }).select('-password -confirmPassword');
        if (!user) return next(new ErrorResponse('User not found', 404));

        if (user.isLocked && user.OTPStore) {
            const isMatch = await bcrypt.compare(OTP, user.OTPStore);

            if (isMatch) {
                user.OTPStore = null;
                user.loginAttempts = 0;
                user.isLocked = false;
                await user.save();

                res.status(200).json({ message: 'Account successfully unlocked.' });
            } else {
                return next(new ErrorResponse('Invalid OTP', 400));
            }
        } else {
            return next(new ErrorResponse('Account not locked', 400));
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Send mail for password reset
 * @route POST /v1/auth/forgot_password
 * @access Public
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function mailForPasswordReset(req, res, next) {
    try {
        const { email } = req.body;
        const userData = validateEmailAddress.parse({ email });

        const user = await UserModel.findOne({ email: userData.email }).select('-password -confirmPassword')
        if (!user) return next(new ErrorResponse('User not found', 404));

        if (user.isConfirmed) {
            const otp = generateOTP();
            await storeOTP(user.email, otp);
            await sendMail(otp, user.email, 'forgot password', user.name);
        } else {
            return next(new ErrorResponse('Email not confirmed', 400));
        }

        const accessToken = generateToken(user._id, 'reset');

        res.status(200).json({
            message: 'Mail sent successfully',
            accessToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Validate OTP for password reset
 * @route PUT /v1/auth/validate_otp
 * @access Private
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function validateOTPForPasswordReset(req, res, next) {
    try {
        const { id } = req.user;
        const { OTP } = req.body;

        const user = await UserModel.findById(id).select('-password -confirmPassword');
        if (!user) return next(new ErrorResponse('User not found', 404));

        const storedOTP = await verifyOTP(OTP, user.email);

        if (storedOTP) {
            user.otpTracker = true;
            await user.save();

            res.status(200).json({ message: 'OTP verified successfully.' });
        } else {
            next(new ErrorResponse('Invalid OTP', 400));
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Reset user password
 * @route PUT /v1/auth/reset_password
 * @access Private
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function resetUserPassword(req, res, next) {
    try {
        const { id } = req.user;
        const { newPassword, confirmPassword } = req.body;
        const userData = validatePasswordChange.parse({ newPassword, confirmPassword });
        if (userData.newPassword !== userData.confirmPassword) return next(new ErrorResponse('Passwords do not match', 400));

        let user = await UserModel.findById(id);
        if (!user) return next(new ErrorResponse('User not found', 404));
        if (!user.otpTracker) return next(new ErrorResponse('OTP not Verified', 400));

        user.password = userData.newPassword;
        user.confirmPassword = userData.confirmPassword;
        user.otpTracker = false;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully, kindly login' });
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Logout user
 * @route GET /v1/auth/logout
 * @access Private
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @returns {Function} - The success response or an error.
 */
async function logoutUser(req, res, next) {
    try {
        const authHeader = req.header('Authorization') || req.header('authorization');
        const token = authHeader && authHeader.split(' ')[1];

        await BlacklistToken.create({ token });

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        next(error);
    }
}

/**
 * @desc Callback route to give user access token
 * @route GET /v1/auth/google/callback
 * @access Private
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Function} - The success response or an error.
 */
function googleCallback(req, res) {
    const payload = {
        id: req.user._id,
        role: req.user.role,
        iat: Date.now()
    };

    const options = { expiresIn: '1d' };
  
    const token = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, options);

    res.status(201).json({
        message: 'Google Access granted',
        accessToken: token,
        user: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    })
}

module.exports = {
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
};