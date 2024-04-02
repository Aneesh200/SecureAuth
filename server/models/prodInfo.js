// prodInfo.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  productId: {
    type: String,
    required: true,
    default: "",
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;

