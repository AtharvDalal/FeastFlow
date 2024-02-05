import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { createResturantController } from '../controllers/resturantController.js';

const router = express.Router()


// Create Restaurant

router.post('/create', authMiddleware, createResturantController)


export default router;