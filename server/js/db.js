import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://daKaizen:D%40n13L%2F47811771231812%2B%2A@cluster0.vyglg2r.mongodb.net/proyectoAcademiaDB");
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
