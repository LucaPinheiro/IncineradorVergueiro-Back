import Event from "../models/Event.js";

class EventService {
  async createEvent(eventAttributes) {
    const newEvent = new Event(eventAttributes);
    try {
      const savedEvent = await newEvent.save();
      console.log("Evento salvo com sucesso:", savedEvent); 
      return savedEvent;
    } catch (error) {
      console.error("Erro ao salvar o evento:", error);
      throw error;
    }
  }

  async getAllEvents() {
    const events = await Event.find();
    return events;
  }

  async getEventById(eventId) {
    const event = await Event.findById(eventId);
    return event;
  }

  async updateEvent(eventId, eventAttributes) {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      eventAttributes,
      {
        new: true,
      }
    );
    return updatedEvent;
  }

  async deleteEvent(eventId) {
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    return deletedEvent;
  }
}

export default new EventService();
