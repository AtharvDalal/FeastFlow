import { Foods } from "../models/foodModel.js";
import { Orders } from "../models/orderModel.js";

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
    await newFood.save();
    res.status(200).send({
      success: true,
      msg: "New Food Item Is Created",
      newFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Create Food  API",
      error,
    });
  }
};

export const getallFoodController = async () => {
  try {
    const getallFood = await Foods.find({});
    if (!getallFood) {
      return res.status(404).send({
        success: false,
        msg: "No food Item Was Found",
      });
    }
    res.status(200).send({
      success: true,
      totalcount: getallFood.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Get All Food  API",
      error,
    });
  }
};

export const getFoodbyIdController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(500).send({
        success: false,
        msg: "Id Is Inavlid ",
      });
    }

    const food = await Foods.findById(id);
    if (!food) {
      return res.status(500).send({
        success: false,
        msg: "No Food Item Was Found on This ID  ",
      });
    }
    res.status(200).send({
      success: true,
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
};

// get Food  By resturant
export const getFoodbyRestuarantController = async (req, res) => {
  try {
    const resturantid = req.params.id;
    if (!resturantid) {
      return res.status(500).send({
        success: false,
        msg: "Resturant Id Is Invalid",
      });
    }

    const food = await Foods.find({ resturant: resturantid });
    if (!food) {
      return res.status(500).send({
        success: false,
        msg: "No Food Item Was Found on This ID  ",
      });
    }
    res.status(200).send({
      success: true,
      msg: "Food based On Resturant",
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
};

//Update Food Items

export const updateFoodController = async () => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        msg: "No Food Id was Found",
      });
    }
    const food = await Foods.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        msg: "No Food Id was Found",
      });
    }
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

    const updatedFood = await Foods.findByIdAndUpdate(
      foodId,
      {
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
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      msg: "Food Item Was udated Successfully", 
      updatedFood
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Update Food API",
      error,
    });
  }
};

export const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      res.status(500).send({
        success: false,
        msg: "Provide Food ID",
      });
    }
    const food = await Foods.findById(foodId);
    if (!food) {
      res.status(404).send({
        success: false,
        msg: "Food Not Found",
      });
    }
    await Foods.findByIdAndDelete(foodId);
    res.status(200).send({
      success: true,
      msg: "Food Item Deleted...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Delete Food API",
      error,
    });
  }
};

//Place Order CONTROLLER
 export const placeOrderController = async(req,res)=>{
     try {
      const {cart, } = req.body;
      if (!cart ) {
        return res.status(500).send({
          success:false,
          msg:"Please provide Food And Cart Method"
        })
      }
      let total = 0;
       
      //calculate Price
      cart.map((i)=>{
            total += i.price
      })
     const newOrder = new Orders({
          foods:cart,
          payments: total,
          buyer: req.body.id

     })
     await newOrder.save()
     res.status(200).send({
      success:true,
      msg:"Order Placed SuccessFully",
      newOrder
     })
     } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        msg: "Error Place Order  API",
        error,
     })
 }
 }

 //Change Order Status

 export const orderStatusController = async(req,res)=>{
      try {
        const orderId = req.params.id;
        if (!orderId) {
          return res.status(404).send({
            success: false,
            msg:"Please Provide Valid Order ID"
          })
        }
        const {status} = req.body;
        const order = await Orders.findByIdAndUpdate(orderId, {status}, {new:true})
        res.status(200).send({
          success: true,
          msg: "Order Status Updated"
        })
      } catch (error) {
        console.log(error);
      res.status(500).send({
        success: false,
        msg: "Error Order Status  API",
        error,
     })
      }
 }