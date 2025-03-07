const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserRole } = require('../controllers/userController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/update-role', protect, authorize(['super_admin', 'enterprise_admin']), updateUserRole);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
