import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getUserController, updateUserController } from '../controllers/userController.js'

const router = express.Router()

//

router.get('/getuser', authMiddleware, getUserController)

router.put('/updateuser',authMiddleware, updateUserController)
export default router
