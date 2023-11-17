import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productName: {
    type: String, 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const newOrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItems: [orderItemSchema],
  totalPrice: {
    type: Number,
    required: true,
  },
});

const NewOrder = mongoose.model("NewOrder", newOrderSchema);

export default NewOrder;
