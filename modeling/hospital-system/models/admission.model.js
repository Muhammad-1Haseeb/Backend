import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Patient" 
},
  roomNumber: {
    type: String
  },
  admittedAt: {
    type: Date
  },
  dischargedAt: {
    type: Date
  }
});

export const Admission = mongoose.model("Admission", admissionSchema);
