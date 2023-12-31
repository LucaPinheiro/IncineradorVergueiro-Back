import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nameProduct: {
    type: String,
    required: true,
  },
  urlImageProduct: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
