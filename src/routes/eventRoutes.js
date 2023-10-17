import express from "express";
import EventController from "../controllers/event/eventController.js";
import errorHandler from "../middlewares/errorHandler.js";

const eventRouter = express.Router();
const eventController = new EventController();

eventRouter.post("/event", eventController.createEvent);
eventRouter.get("/event", eventController.getAllEvents);
eventRouter.get("/event/:id", eventController.getEventById);
eventRouter.put("/event/:id", eventController.updateEvent);
eventRouter.delete("/event/:id", eventController.deleteEvent);

eventRouter.use(errorHandler);

export default eventRouter;
