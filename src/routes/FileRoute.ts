import express from 'express';
import multer from 'multer';
import FileController from '../controllers/FileController';

// * Create a express instance.
const router = express.Router();

// * create a multer upload instance.
// * This will store files in memory as buffer objects.
const upload = multer({ storage: multer.memoryStorage() });

// * File routes endpoints.
router.post('/analyse-file', upload.single('file'), FileController.getFileData);

export default router;
