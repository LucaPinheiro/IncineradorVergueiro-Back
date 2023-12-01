import SuggestionEvent from "../models/SuggestionEvent.js";

class SuggestionEventService {
  async createSuggestionEvent(eventAttributes) {
    const newEvent = new SuggestionEvent(eventAttributes);
    const savedEvent = await newEvent.save();
    return savedEvent;
  }

  async getAllSuggestionEvents() {
    const events = await SuggestionEvent.find();
    return events;
  }

  async getSuggestionEventById(eventId) {
    const event = await SuggestionEvent.findById(eventId);
    return event;
  }

  async updateSuggestionEvent(eventId, eventAttributes) {
    const updatedEvent = await SuggestionEvent.findByIdAndUpdate(
      eventId,
      eventAttributes,
      {
        new: true,
      }
    );
    return updatedEvent;
  }

  async deleteSuggestionEvent(eventId) {
    const deletedEvent = await SuggestionEvent.findByIdAndDelete(eventId);
    return deletedEvent;
  }
}

export default new SuggestionEventService();
