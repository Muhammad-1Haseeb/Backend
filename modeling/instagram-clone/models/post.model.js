import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    mediaUrl:{
        type: String,
        required: true
    },
    caption:{
        type: String,
    },
    postType:{
        type: "POST",
        enum: ["POST", "STORY","REEL"],
        default: "POST",
    }
},{timestamps: true});

export const Post = mongoose.model("Post", postSchema);