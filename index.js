import express from "express";
import cors from 'cors'
import morgan from "morgan";
import connectDB from "./db/db.js";
import router from "./routes/authRoutes.js";

const app = express()

const PORT = 8000;
 
connectDB()

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())


app.use('/api/v1/auth', router)

app.listen(PORT, ()=>{
    return console.log(`server was running on PORT:-${PORT}`);
})

