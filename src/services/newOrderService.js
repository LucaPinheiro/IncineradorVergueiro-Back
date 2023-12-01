import NewOrder from "../models/NewOrder.js";

class NewOrderService {
  async createNewOrder(orderAttributes) {
    const newOrder = new NewOrder(orderAttributes);
    const savedOrder = await newOrder.save();
    return savedOrder;
  }

  async getAllOrders() {
    const orders = await NewOrder.find();
    return orders;
  }

  async getOrderById(orderId) {
    const order = await NewOrder.findById(orderId);
    return order;
  }

  async updateOrder(orderId, orderAttributes) {
    const updatedOrder = await NewOrder.findByIdAndUpdate(
      orderId,
      orderAttributes,
      {
        new: true,
      }
    );
    return updatedOrder;
  }

  async deleteOrder(orderId) {
    const deletedOrder = await NewOrder.findByIdAndDelete(orderId);
    return deletedOrder;
  }
}

export default new NewOrderService();
