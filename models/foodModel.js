import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food Title Is Require"],
    },
    description: {
      type: String,
      required: [true, "food Description Is Required"],
    },
    price: {
      type: Number,
      required: [true, "Food Price Is Required "],
    },
    imageUrl: {
      type: String,
      default:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F07%2F01%2F12%2F58%2Ficon-5359553_640.png&tbnid=b4_0a57ZwJnEpM&vet=12ahUKEwjsydqMr4qEAxW9hmMGHTgyCnYQMygAegQIARBG..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2520icon%2F&docid=wm3m253FOCCAUM&w=640&h=640&q=user%20profile%20logo%20png%20pixabay&ved=2ahUKEwjsydqMr4qEAxW9hmMGHTgyCnYQMygAegQIARBG",
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
    },
    code: {
      type: String,
    },
    isFoodAvailable: {
      type: Boolean,
      default: true,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Foods = mongoose.model("Foods", foodSchema);
