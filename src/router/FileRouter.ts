import express from 'express'
import multer from 'multer'
import { GetFileData } from '../controller/FileController'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/fileanalyse', upload.single('upfile'), GetFileData)

export default router
