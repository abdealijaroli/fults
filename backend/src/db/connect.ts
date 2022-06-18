import mongoose from "mongoose";

export async function dbConnect(): Promise<any> {
   try {
      await mongoose.connect(process.env.DB_URL!);
      console.log("Connected to the database");

   } catch (e) {
      console.log(e, "Error connecting to the database");
   }
}