import app from "./js/app.js";
import {connectDB} from "./js/db.js";
import dotenv from "dotenv";

dotenv.config();

async function main() { 
  try {
    await connectDB();
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
