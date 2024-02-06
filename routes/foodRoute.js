import express from 'express'
import { createFoodController, getFoodbyIdController, getFoodbyRestuarantController, getallFoodController } from '../controllers/foodController.js'

const router = express.Router()

// Create Food
router.post('/create',createFoodController)


//Get All Foods
router.get('/getall',getallFoodController)

//get Food By ID
router.get('/getone/:id', getFoodbyIdController)

//get Food By Resturant
router.get('/getbyrest/:id', getFoodbyRestuarantController)
export default router