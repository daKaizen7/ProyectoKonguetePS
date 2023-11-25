
import connectDB from ("./js/connectMongo");

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});