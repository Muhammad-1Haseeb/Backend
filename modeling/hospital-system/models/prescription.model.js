import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
  appointment: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Appointment" 
  },
  medicines: [String],
  notes: {
    type: String
  }
}, { timestamps: true });

export const Prescription = mongoose.model("Prescription", prescriptionSchema);
