import SuggestionEventService from "../../services/suggestionEventService.js";

class SuggestionEventController {
  async createSuggestionEvent(req, res) {
    const eventAttributes = req.body;

    console.log("req.user:", req.user); 
    eventAttributes.userId = req.user.id; 

    try {
      const savedEvent = await SuggestionEventService.createSuggestionEvent(
        eventAttributes
      );
      res.status(201).json(savedEvent);
    } catch (error) {
      console.error("Erro ao criar um evento de sugestão:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getAllSuggestionEvents(req, res) {
    try {
      const events = await SuggestionEventService.getAllSuggestionEvents();
      res.status(200).json(events);
    } catch (error) {
      console.error("Erro ao buscar eventos de sugestão:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getSuggestionEventById(req, res) {
    const eventId = req.params.id;

    try {
      const event = await SuggestionEventService.getSuggestionEventById(
        eventId
      );
      if (!event) {
        return res
          .status(404)
          .json({ message: "Evento de sugestão não encontrado" });
      }
      res.status(200).json(event);
    } catch (error) {
      console.error("Erro ao buscar um evento de sugestão por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async updateSuggestionEventById(req, res) {
    const eventId = req.params.id;
    const updatedAttributes = req.body;

    try {
      const updatedEvent = await SuggestionEventService.updateSuggestionEvent(
        eventId,
        updatedAttributes
      );
      if (!updatedEvent) {
        return res
          .status(404)
          .json({ message: "Evento de sugestão não encontrado" });
      }
      res.status(200).json(updatedEvent);
    } catch (error) {
      console.error("Erro ao atualizar um evento de sugestão por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async deleteSuggestionEventById(req, res) {
    const eventId = req.params.id;

    try {
      const result = await SuggestionEventService.deleteSuggestionEvent(
        eventId
      );
      if (!result) {
        return res
          .status(404)
          .json({ message: "Evento de sugestão não encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao deletar um evento de sugestão por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

export default SuggestionEventController;
