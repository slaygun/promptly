import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connecToDB = async () => {
    mongoose.set('strictQuery',true);

    if(isConnected) {
        console.log('MongoDB is connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log('MongoDB connected')
    }   catch (error) {
            console.log(error);

    }
}