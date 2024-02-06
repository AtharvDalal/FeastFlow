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

export const getallFoodController = async()=>{
  try {
    const getallFood = await Foods.find({})
    if (!getallFood) {
      return res.status(404).send({
        success:false,
        msg: "No food Item Was Found"
      })
    }
    res.status(200).send({
      success:true,
      totalcount: getallFood.length
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Get All Food  API",
      error,
    });
  }
}

export const getFoodbyIdController = async(req,res)=>{
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(500).send({
        success:false,
        msg:"Id Is Inavlid "
      })
    }

  const food = await Foods.findById(id)
  if (!food) {
    return res.status(500).send({
      success:false,
      msg:"No Food Item Was Found on This ID  "
    })
  }
    res.status(200).send({
      success:true,
     food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Get Food By ID  API",
      error,
    });
  }
}





// get Food  By resturant
export const getFoodbyRestuarantController = async(req,res)=>{
  try {
    const resturantid = req.params.id;
    if (!resturantid) {
      return res.status(500).send({
        success:false,
        msg:"Resturant Id Is Invalid"
      })
    }

  const food = await Foods.find({resturant:resturantid})
  if (!food) {
    return res.status(500).send({
      success:false,
      msg:"No Food Item Was Found on This ID  "
    })
  }
    res.status(200).send({
      success:true,
      msg:"food based On Resturant",
     food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Get Food By ID  API",
      error,
    });
  }
}

