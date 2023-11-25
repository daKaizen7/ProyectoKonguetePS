import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

async function main() {
  const connectDB = require("./connectMongo");

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
