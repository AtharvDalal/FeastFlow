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
        msg: "Please Provide Title And Address",
      });
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
    });
    await newRestaurant.save();
    res.status(200).send({
      success: true,
      msg: "New Resturant Created Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Create Resturant  API",
      error,
    });
  }
};

//Get All

export const getAllResturantcontroller = async (req, res) => {
  try {
    const resturants = await Restaurant.find({})
    if (!resturants) {
      return res.status(404).send({
        success:false,
        msg:"Resturant Not Found"
      })
    }
    res.status(200).send({
      success: true,
       totalCount: resturants.length,
       resturants,

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

export const getResturantByIdcontroller = async(req,res)=>{
    try {
      const id = req.params.id
        if (!id) {
          return res.status(404).send({
            success: false,
            msg:"Please Provide Resturant ID"
          })
        }
      const resturant = await Restaurant.findById(id)
          if (!resturant) {
            return res.status(404).send({
              success: false,
              msg:"Resturant Not Found"
            })
          }
          res.status(200).send({
            success: true,
            resturant,
          })
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        msg: "Error In Get One Resturant  API",
        error,
      });
    }
}

export const deleteResturantController = async(req,res)=>{
         try {
          const id = req.params.id;
          if (!id) {
            return res.status(404).send({
              success: false,
              msg:"No Resturant Found Or Invalid ID"
            })
          }
          await Restaurant.findByIdAndDelete(id)
          res.status(200).send({
            success:true,
            msg:"resturant Delete SuccessFully"
          })
         } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            msg: "Error In Delete Resturant  API",
            error,
          });
         }
}
