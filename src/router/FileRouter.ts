import express from 'express';
import multer from 'multer';
import { GetFileData } from '../controller/FileController';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/analyse-file', upload.single('file'), GetFileData);

export default router;
