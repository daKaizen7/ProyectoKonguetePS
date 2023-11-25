import app from "./js/app.js";
import { PORT } from "./js/config.js";
import { connectDB } from "./js/db.js";

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();