import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Patient" 
  },
  reportType: {
    type: String,
    required: true
  },
  reportUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const MedicalReport = mongoose.model("MedicalReport", reportSchema);
