import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
        title:{
            type: String,
            required:[true,"category title is Required"]
        },
        imageUrl:{
            type: String,
            default: "url"
        }

}, {timestamps: true})

export const Category = mongoose.model("Category", categorySchema)