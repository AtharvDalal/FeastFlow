import  mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: [true, "Email Is Required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is Required"]
    },
    address:{
        type: String,
        
    },
    phone:{
        type: String,
        required: [true, "Phone Number is Required"]
    },
    usertype:{
        type: String,
        required: [true, "User Type is Required"],
        default: 'client',
        enum:['client', 'admin', 'vendor', 'driver']
    },
    profile:{
        type: String,
        default:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F07%2F01%2F12%2F58%2Ficon-5359553_640.png&tbnid=b4_0a57ZwJnEpM&vet=12ahUKEwjsydqMr4qEAxW9hmMGHTgyCnYQMygAegQIARBG..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2520icon%2F&docid=wm3m253FOCCAUM&w=640&h=640&q=user%20profile%20logo%20png%20pixabay&ved=2ahUKEwjsydqMr4qEAxW9hmMGHTgyCnYQMygAegQIARBG'
    },
    answer:{
        type: String,
        required: [true, "Answer Is Required"],
    }

}, {timestamps: true})


export const User =  mongoose.model("User", userSchema)