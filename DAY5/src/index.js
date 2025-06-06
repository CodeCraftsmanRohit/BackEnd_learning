import mongoose from "mongoose";
import connectDb from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`);

    })
})
.catch((err)=>{
    console.log("MONGO DB Connection Failed!!!",err);

})


// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("Error ", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log("Error: " + err);
//     throw err;
//   }
// })();
