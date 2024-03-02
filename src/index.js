import express from "express";
import { app } from "./app.js";
import connectDB from "./db/index.js";
import 'dotenv/config';


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running at PORT :- ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Mongo DB connection failed !!!", error)
})







/*
const app = express()

;( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})()

*/