const express = require('express');
const multer = require('multer');
const { uploadDocument, assignSigners, getUserDocuments, signDocument, downloadDocument } = require('../controllers/documentController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

// Multer Storage
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Routes
router.post('/upload', protect, authorize(['document_owner', 'team_admin']), upload.single('document'), uploadDocument);
router.post('/assign-signers', protect, authorize(['document_owner', 'team_admin']), assignSigners);
router.get('/my-documents', protect, getUserDocuments);
router.post('/sign', protect, authorize(['user', 'team_member']), signDocument);
router.get('/download/:id', protect, downloadDocument);

module.exports = router;
