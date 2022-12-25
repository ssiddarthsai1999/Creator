import mongoose, { Schema } from "mongoose";

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        uploader: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        timeuploaded: {
            type: Date,
            default: new Date(),
        },
        likes: {
            type: [String],
            default: [],
        },
        answer: {
            type: String,
            default: "Not answered",
        },
    },
    { timestamps: true }
);
export const postModel = mongoose.model("Posts", postSchema);

//------------------------------------------------user.................................

const UserSchema = new mongoose.Schema(
    {
        lastname: { type: String, default: "Unknown" },
        firstname: { type: String, default: "Unknown" },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        img: {
            type: String,
            default:
                "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        },
        role: { type: String, default: "Unknown" },
        city: { type: String, default: "Unknown" },
        country: { type: String, default: "Unknown" },
        gender: { type: String, default: "Unknown" },
        dob: { type: String, default: "Unknown" },
        followers: {
            type: [String],
            default: [],
        },
        following: {
            type: [String],
            default: [],
        },
        answered: {
            type: [String],
            default: [],
        },
        questions: {
            type: [String],
            default: [],
        },
        description: { type: String, default: "Description not set " },

        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const userModel = mongoose.model("User", UserSchema);
