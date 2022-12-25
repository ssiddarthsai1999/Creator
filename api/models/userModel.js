// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//     {
//         lastname: { type: String, default: "Unknown" },
//         firstname: { type: String, default: "Unknown" },
//         username: { type: String, required: true, unique: true },
//         email: { type: String, required: true, unique: true },
//         password: { type: String, required: true },
//         img: {
//             type: String,
//             default:
//                 "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
//         },
//         role: { type: String, default: "Unknown" },
//         city: { type: String, default: "Unknown" },
//         country: { type: String, default: "Unknown" },
//         gender: { type: String, default: "Unknown" },
//         dob: { type: String, default: "Unknown" },
//         followers: {
//             type: [String],
//             default: [],
//         },
//         following: {
//             type: [String],
//             default: [],
//         },
//         questions: {
//             type: [String],
//             default: [],
//         },
//         answered: { type: Number, default: "0" },
//         description: { type: String, default: "Description not set " },

//         isAdmin: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     { timestamps: true }
// );

// const userModel = mongoose.model("User", UserSchema);
// export default userModel;
