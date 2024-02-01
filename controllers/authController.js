import { User } from "../models/userModel.js";

const registerController = async (req, res) => {
  try {
    const { username, email,address, password, phone } = req.body;

    if (!username || !password || !email || !password) {
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

    //create New User

    const user = await User.create({username, email, password,address,phone})
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

        const user = await User.findOne({email: email, password:password})
         if (!user) {
          return res.status(500).send({
            success: false,
            msg:"User Not Found Or Password incorrect"
          })
         }
         res.status(200).send({
          success: true,
          msg:'Login Succesfully'
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
