import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getUserController, resetPasswordController, updateUserController } from '../controllers/userController.js'

const router = express.Router()

//

router.get('/getuser', authMiddleware, getUserController)

router.put('/updateuser',authMiddleware, updateUserController)

//Reset Password Route

router.post('/resetpassword', authMiddleware, resetPasswordController)
export default router
