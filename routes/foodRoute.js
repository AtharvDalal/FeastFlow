import express from "express";
import {
  createFoodController,
  deleteFoodController,
  getFoodbyIdController,
  getFoodbyRestuarantController,
  getallFoodController,
  placeOrderController,
  updateFoodController,
} from "../controllers/foodController.js";

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
export default router;
