import app from "./js/app.js";
import {connectDB} from "./js/db.js";

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
