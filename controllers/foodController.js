import { Foods } from "../models/foodModel.js";

export const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      resturant,
      rating,
      category,
      code,
      isFoodAvailable,
      price,
      imageUrl,
      foodTags,
    } = req.body;

    if (!title || !description || !price || !isFoodAvailable || !resturant) {
      return res.status(500).send({
        success: false,
        msg: "Please Provide All Feilds",
      });
    }
    const newFood = Foods({
      title,
      description,
      resturant,
      rating,
      category,
      code,
      isFoodAvailable,
      price,
      imageUrl,
      foodTags,
    });
    await newFood.save()
    res.status(200).send({
        success:true,
        msg:"new Food Item Is Created",
        newFood
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Create Food  API",
      error,
    });
  }
};
