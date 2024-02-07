import express from "express";
import {
  createFoodController,
  deleteFoodController,
  getFoodbyIdController,
  getFoodbyRestuarantController,
  getallFoodController,
  orderStatusController,
  placeOrderController,
  updateFoodController,
} from "../controllers/foodController.js";
import adminMiddlware from "../middleware/adminMidlleware.js";

const router = express.Router();

// Create Food
router.post("/create", createFoodController);

//Get All Foods
router.get("/getall", getallFoodController);

//get Food By ID
router.get("/getone/:id", getFoodbyIdController);

//get Food By Resturant
router.get("/getbyrest/:id", getFoodbyRestuarantController);

//Update Food
router.put("/update/:id", updateFoodController);

//Delete Food
router.delete("/delete/:id", deleteFoodController);

//Place Order
router.post('/placeorder', placeOrderController)


//ORDER Stauts
router.post('/orderstatus/:id',adminMiddlware, orderStatusController)
export default router;
