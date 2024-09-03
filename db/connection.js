import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect('mongodb+srv://omerbagprog:Lx6X9u7ZyeJtB87a@cluster0.89df3.mongodb.net/sarahaMVC').then(() => console.log("Database connected successfully")).catch((error) => console.log(error))
}