import express from "express";
import NewOrderController from "../controllers/newOrder/newOrderController.js";

const router = express.Router();
const controller = new NewOrderController();

router.post("/orders", controller.createNewOrder);
router.get("/orders", controller.getAllOrders);
router.get("/orders/:id", controller.getOrderById);
router.put("/orders/:id", controller.updateOrderById);
router.delete("/orders/:id", controller.deleteOrderById);

export default router;
