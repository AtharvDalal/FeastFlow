import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    foods:[{
        type: mongoose.Types.ObjectId,
        ref:'Foods'

    }],
    payments:{

    },
    buyer:{
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        enum: ['preparing', 'Prepare','on the way','delivery'],
        default:'preparing'
    }

}, { timestamps: true });

export const Orders = mongoose.model("Orders", orderSchema);
