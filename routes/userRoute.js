import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { deleteUserController, getUserController, resetPasswordController, updatePasswordController, updateUserController } from '../controllers/userController.js'

const router = express.Router()

//

router.get('/getuser', authMiddleware, getUserController)

router.put('/updateuser',authMiddleware, updateUserController)

//Reset Password Route

router.post('/resetpassword', authMiddleware, resetPasswordController)
export default router


//update User password

router.post('/updatepassword', authMiddleware,updatePasswordController)

// Delete User

router.delete('/deleteuser/:id', authMiddleware ,deleteUserController)