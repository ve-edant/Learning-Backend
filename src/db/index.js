import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB Connected  ${connectionInstance.connection.host}`);
    } catch(Error) {
        console.log("ERROR Connection Failed: ", Error);
        process.exit(1)
    }
}

export default connectDB