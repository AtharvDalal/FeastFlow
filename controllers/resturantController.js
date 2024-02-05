// Create Restaurant

import { Restaurant } from "../models/restaurantModel.js";

export const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      ratingCount,
      rating,
      code,
      cords,
    } = req.body;
    //validation

    if (!title || !cords) {
        return res.status(404).send({
            success: false,
            msg:"Please Provide Title And Address"
        })
    }
    const newRestaurant = new Restaurant({
        title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      ratingCount,
      rating,
      code,
      cords,
    })
    await newRestaurant.save()
    res.status(200).send({
        success: true,
        msg:"New Resturant Created Succesfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Create Resturant  API",
      error,
    });
  }
};
