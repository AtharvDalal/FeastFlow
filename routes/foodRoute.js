import express from 'express'
import { createFoodController } from '../controllers/foodController.js'

const router = express.Router()

router.post('/create',createFoodController)

export default router