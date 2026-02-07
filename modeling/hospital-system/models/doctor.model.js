import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  consultationFee: {
    type: Number,
    required: true
  }
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
