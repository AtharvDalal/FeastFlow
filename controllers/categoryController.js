//Create cat

import { Category } from "../models/categoryModel.js";


export const createCategoryController = async(req,res)=>{
          try {
            const {title, imageUrl} = req.body;
            //validation
            if (!title ) {
                return res.status(500).send({
                    success:false,
                    msg:"Please Provide Image And Title"
                })
            }
            const newCategory = new Category({title, imageUrl})
            await newCategory.save()
            res.status(201).send({
                success:true,
                msg:"New Category Created",
                newCategory

            })
          } catch (error) {
            console.log(error);
          res.status(500).send({
            success: false,
            msg: "Error In Create Category  API",
            error,
          });
          }
}