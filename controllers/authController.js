import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


const registerController = async (req, res) => {
  try {
    const { username, email,address, password,answer ,phone } = req.body;

    if (!username || !password || !email ||!answer || !password) {
        return res.status(500).send({
            success:false,
            msg: "Please Fill All Feilds"
        })
    }

    //check User

    const userexist = await User.findOne({email})
    if (userexist) {
        return res.status(500).send({
            success: false,
            msg: 'Email Already Existed'
        })       
    }
    //Hashing Passowrd
    var salt = bcryptjs.genSaltSync(10)
    const hashPassword = await bcryptjs.hash(password, salt)

    //create New User

    const user = await User.create({username, email, password: hashPassword,address,phone,answer})
    res.status(201).send({
      success: true,
      msg:"User Registerd Succesfull",
      user,
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Register API",
      
    });
  }
};


const loginConrtoller =async (req, res)=>{
       try {

        const {email,password} = req.body;
        if(!email || !password){
          return res.status(500).send({
            success: false,
            msg:"Pelase Provide Email or Password"
          })
        }

        const user = await User.findOne({email})
         if (!user) {
          return res.status(500).send({
            success: false,
            msg:"User Not Found"
          })
         }
         // check Password correct
         const isMatch = await bcryptjs.compare(password,user.password)
         if (!isMatch) {
           return res.status(500).send({
              success: false,
              msg:"Password Incorrect"
             })
         }
         // creating Token

         const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
           expiresIn: '7d'
         })
         user.password = undefined
         res.status(200).send({
          success: true,
          msg:'Login Succesfully',
          token,
          user,
          

         })
        
       } catch (error) {
        console.log(error);
        res.status(500).send({
          success:false,
          msg:"Login API Error"
        })
       }
}
export {registerController, loginConrtoller};
