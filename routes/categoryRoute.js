import express from 'express'
import { UpdateCategoryController, createCategoryController, deleteCategoryController, getAllCategoryController } from '../controllers/categoryController.js'

const router = express.Router()

//Create Category
router.post('/create', createCategoryController)

// Get ALL Category
router.get('/getall',getAllCategoryController)

// Update Categories
router.put('/update/:id',UpdateCategoryController)

//Delete Categories
router.delete('/delete/:id',deleteCategoryController)
export default router