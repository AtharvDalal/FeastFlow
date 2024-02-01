import express from 'express'
import registerController from '../controllers/authController.js'

const router = express.Router()

//REGISTER ROUTE
router.post('/register',registerController)

export default router
