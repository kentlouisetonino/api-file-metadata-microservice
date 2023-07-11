import express from 'express';
import DefaultController from '../controllers/DefaultController';

// * Create an express router instance.
const router = express.Router();

// * Default routes endpoint.
router.get('/', DefaultController.home);

export default router;
