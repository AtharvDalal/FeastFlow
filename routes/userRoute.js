import express from 'express'
import getUserController from '../controllers/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

//

router.get('/getuser', authMiddleware, getUserController)
export default router
