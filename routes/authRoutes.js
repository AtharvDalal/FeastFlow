import express from 'express'
import { registerController ,loginConrtoller } from '../controllers/authController.js'

const router = express.Router()

//REGISTER ROUTE
router.post('/register',registerController)

//LOGIN ROUTE
router.post('/login',loginConrtoller)

export default router
