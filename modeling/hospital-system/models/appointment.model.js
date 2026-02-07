import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Patient" 
    },
    doctor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Doctor" 
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ["BOOKED", "COMPLETED", "CANCELLED"],
      default: "BOOKED",
    },
  },
  { timestamps: true },
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
