import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  nameEvent: {
    type: String,
    required: true,
  },
  host: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  participants: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
