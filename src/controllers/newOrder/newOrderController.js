import NewOrderService from "../../services/newOrderService.js";

class NewOrderController {
  async createNewOrder(req, res) {
    try {
      const orderAttributes = req.body;
      const savedOrder = await NewOrderService.createNewOrder(orderAttributes);
      res.status(201).json(savedOrder);
    } catch (error) {
      console.error("Erro ao criar um novo pedido:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getAllOrders(req, res) {
    try {
      const orders = await NewOrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getOrderById(req, res) {
    const orderId = req.params.id;

    try {
      const order = await NewOrderService.getOrderById(orderId);
      if (!order) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }
      res.status(200).json(order);
    } catch (error) {
      console.error("Erro ao buscar um pedido por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async updateOrderById(req, res) {
    const orderId = req.params.id;
    const updatedAttributes = req.body;

    try {
      const updatedOrder = await NewOrderService.updateOrder(
        orderId,
        updatedAttributes
      );
      if (!updatedOrder) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error("Erro ao atualizar um pedido por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async deleteOrderById(req, res) {
    const orderId = req.params.id;

    try {
      const result = await NewOrderService.deleteOrder(orderId);
      if (!result) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao deletar um pedido por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

export default NewOrderController;
