//GEt USER INFO

import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
export const getUserController = async(req,res)=>{
         try {
            //find User
      const user = await User.findById({_id:req.body.id})
      //validation

      if (!user) {
        return res.status(404).send({
               success:false,
               msg: 'User Not Found',
               error
        })
        
      }
        //hide Password
        user.password = undefined;
        res.status(200).send({
            success: true,
            msg: "User data get Successfully",
            user
        })

         } catch (error) {
            console.log(error);
            res.statust(500).send({
               success:false,
               msg: 'Error in Get User API',
               error
            })
         }
}



 export const updateUserController = async(req,res)=>{
try {

    const user = await User.findById({_id: req.body.id})
    if (!user) {
        return res.status(404).send({
               success:false,
               msg: 'User Not Found',
               error
        })
        
    }
    //User Update
    const {username, address, phone } = req.body;
    if (username) user.username = username;
    if (address) user.address = address;
    if (phone) user.phone = phone;

    //save
    await user.save()
    res.status(200).send({
        success:true,
      msg: 'User Update Successfully',
    
    })

} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        msg: 'Error in Update User API',
        error})
}
}

export const resetPasswordController = async(req ,res)=>{
  try {

    const {email, newPassword, answer} = req.body;
      
    if (!email || !newPassword || !answer) {
      res.status(500).send({
        success: false,
        msg: "Please Provide all Feilds"
       })
    }

    const user = await User.findOne({email, answer})
    if (!user) {
      res.status(500).send({
        success: false,
        msg: "User Not Found or Invalid Answer"
       })
    }

    var salt = bcryptjs.genSaltSync(10)
    const hashPassword = await bcryptjs.hash(newPassword, salt)
    user.password = hashPassword;
    await user.save();
    res.status(200).send({
      success: true,
      msg:"Password reset Successfull"
    })
    
  } catch (error) {
       console.log(error);
       res.status(500).send({
        success: false,
        msg: "Error In ResetPassword API"
       })
  }
}

// update User Password

export const updatePasswordController = async(req, res)=>{
     try {
      //find user
    const user = await User.findById({_id:req.body.id}) 
    if (!user) {
         return res.status(404).send({
          success: false,
          msg: "User NOt Found"
         })      
    }     

    // get data
     const {oldPassword,newPassword } = req.body
     if (!oldPassword || !newPassword) {
       return res.status(500).send({
        success:false,
        msg:" Please Provide Old And New Password"

       })
     }
     const isMatch = await bcryptjs.compare(oldPassword , user.password)
     if (!isMatch) {
          return res.status(500).send({
            success:false,
            msg:"Invalid Old Password"
          })
     }
     // Hashing Password
     var salt = bcryptjs.genSaltSync(10)
     const hashPassword = await bcryptjs.hash(newPassword, salt)
     user.password = hashPassword;
       await user.save();
       res.status(200).send({
        success: true,
        msg:" Password Updated Successfull"
       })
     } catch (error) {
      console.log(error);
      res.status(500).send({
       success: false,
       msg: "Error In Update Password API",
       error
      })
     }
}

// Delete User Account

export const deleteUserController = async(req, res)=>{
  try {
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).send({
      success: true,
      msg: "Your Account has been Deletetd"
    })
  } catch (error) {
    console.log(error);
      res.status(500).send({
       success: false,
       msg: "Error In Delete User API",
       error
      })
  }
}