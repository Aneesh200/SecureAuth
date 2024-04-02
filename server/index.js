import connectToMongo from "./db.js";
import express, { json } from "express";
import productRoute from './routes/getProduct.js'
const app = express();
connectToMongo();

app.use('/product', productRoute);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});