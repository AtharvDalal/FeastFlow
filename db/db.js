import mongoose from "mongoose";



const connectDB = async()=>{
         try {
            
            await mongoose.connect('mongodb+srv://sangamdalal24:sangam24@cluster0.lhpjvri.mongodb.net/food-app');
            console.log(`connected to DataBase ${mongoose.connection.host}`);
         } catch (error) {
            console.log('Db Error', error);
         }
}


export default connectDB