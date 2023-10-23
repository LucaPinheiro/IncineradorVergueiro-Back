import mongoose from "mongoose";

const suggestionEventSchema = new mongoose.Schema({
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
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const SuggestionEvent = mongoose.model(
  "SuggestionEvent",
  suggestionEventSchema
);

export default SuggestionEvent;
