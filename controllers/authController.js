import { User } from "../models/userModel.js";

const registerController = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    if (!username || !password || !email || !password) {
        return res.status(500).send({
            success:false,
            msg: "Please Fill All Feilds"
        })
    }

    //check User

    const userexist = await User.findOne({email})
    if (!userexist) {
        return res.status(500).send({
            success: false,
            msg: 'Email Already Existed'
        })       
    }

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Register API",
    });
  }
};
export default registerController;
