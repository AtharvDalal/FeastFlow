import express from "express";
import cors from 'cors'
import morgan from "morgan";
import connectDB from "./db/db.js";
import router from "./routes/authRoutes.js";
import userRoute from './routes/userRoute.js'
import resturantRoute from './routes/restaurantRoutes.js'
import dotenv from 'dotenv'
import categoryRoute from './routes/categoryRoute.js'
const app = express()

const PORT = 8000;
 
connectDB()

dotenv.config()

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())


app.use('/api/v1/auth', router)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/resturant',resturantRoute)
app.use('/api/v1/category', categoryRoute)

app.listen(PORT, ()=>{
    return console.log(`server was running on PORT:-${PORT}`);
})

