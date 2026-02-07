import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Patient" 
},
  amount: {
    type: Number,
    required: true
  },
  paid: { 
    type: Boolean, 
    default: false 
}
}, { timestamps: true });

export const Bill = mongoose.model("Bill", billSchema);
