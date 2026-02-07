import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    medicalHistory: {
        type: String,
        required: true
    }
},{timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);