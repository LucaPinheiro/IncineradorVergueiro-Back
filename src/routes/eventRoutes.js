import express from "express";
import EventController from "../controllers/event/eventController.js";
import errorHandler from "../middlewares/errorHandler.js";

const eventRouter = express.Router();
const eventController = new EventController();

eventRouter.post("/events", eventController.createEvent);
eventRouter.get("/events", eventController.getAllEvents);
eventRouter.get("/events/:id", eventController.getEventById);
eventRouter.put("/events/:id", eventController.updateEvent);
eventRouter.delete("/events/:id", eventController.deleteEvent);

eventRouter.use(errorHandler);

export default eventRouter;
