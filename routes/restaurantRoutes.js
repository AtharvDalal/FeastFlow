import express from 'express'
import { createResturantController, deleteResturantController, getAllResturantcontroller, getResturantByIdcontroller } from '../controllers/resturantController.js';

const router = express.Router()


// Create Restaurant

router.post('/create', createResturantController)

// Get ALL Resturant
router.get('/getallres',getAllResturantcontroller)

//Get Resturant By Id
router.get('/getone/:id',getResturantByIdcontroller)

//Delete Resturant
router.delete('/delete/:id', deleteResturantController)

export default router;