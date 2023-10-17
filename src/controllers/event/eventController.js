import EventService from "../../services/eventService.js";

class EventController {
  async createEvent(req, res) {
    try {
      const eventAttributes = req.body;
      console.log("Recebendo dados do evento:", eventAttributes); 

      const newEvent = await EventService.createEvent(eventAttributes);
      console.log("Evento criado com sucesso:", newEvent); 

      res.status(201).json(newEvent);
    } catch (error) {
      console.error("Erro ao criar um evento:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getAllEvents(req, res) {
    try {
      const events = await EventService.getAllEvents();
      res.status(200).json(events);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getEventById(req, res) {
    const eventId = req.params.id;
    try {
      const event = await EventService.getEventById(eventId);
      if (!event) {
        return res.status(404).json({ message: "Evento não encontrado" });
      }
      res.status(200).json(event);
    } catch (error) {
      console.error("Erro ao buscar um evento por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async updateEvent(req, res) {
    const eventId = req.params.id;
    const updatedAttributes = req.body;
    try {
      const updatedEvent = await EventService.updateEvent(
        eventId,
        updatedAttributes
      );
      if (!updatedEvent) {
        return res.status(404).json({ message: "Evento não encontrado" });
      }
      res.status(200).json(updatedEvent);
    } catch (error) {
      console.error("Erro ao atualizar um evento por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async deleteEvent(req, res) {
    const eventId = req.params.id;
    try {
      const result = await EventService.deleteEvent(eventId);
      if (!result) {
        return res.status(404).json({ message: "Evento não encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao deletar um evento por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

export default EventController;
