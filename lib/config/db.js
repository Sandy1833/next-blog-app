import  mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect(`${process.env.MONGODB_URI}/blog-app`);
    console.log("DB Connected");
}
