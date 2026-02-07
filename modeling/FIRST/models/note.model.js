import mongoose from "mongoose";

const noteSchema = new mongoose.Schema( // noteSchema = note ka data kaisa hoga
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true,
    },
);

export const Note = mongoose.model("Note", noteSchema)