import app from "./js/app.js";
import { connectDB } from "./js/db.js";

const PORT = 3000;
connectDB();
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
