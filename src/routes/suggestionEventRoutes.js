import express from "express";
import SuggestionEventController from "../controllers/suggestionEvent/suggestionEventController.js";
import AuthService from "../services/authService.js";

const router = express.Router();
const suggestionEventController = new SuggestionEventController();
const authService = new AuthService();

router.post("/create-suggestion-event", authService.verifyToken, (req, res) => {
  suggestionEventController.createSuggestionEvent(req, res);
});

router.get("/suggestion-events", suggestionEventController.getAllSuggestionEvents);
router.get("/suggestion-events/:id", suggestionEventController.getSuggestionEventById);
router.put("/suggestion-events/:id", authService.verifyToken, suggestionEventController.updateSuggestionEventById);
router.delete("/suggestion-events/:id", authService.verifyToken, suggestionEventController.deleteSuggestionEventById);

export default router;
