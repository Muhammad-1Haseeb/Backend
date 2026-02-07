import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    messageType: {
      type: String,
      default: "text", // text, image, video, audio
    },
    seenAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
