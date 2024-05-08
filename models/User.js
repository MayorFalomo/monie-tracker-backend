import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: false,
    },
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Finance",
    //   required: true,
    // },
    username: {
      type: String,
      required: false,
      unique: false,
    },
    currency: {
      type: String,
      required: false,
      default: "$",
    },
    profileDp: {
      type: String,
      required: false,
      default:
        "https://i.pinimg.com/564x/33/f4/d8/33f4d8c6de4d69b21652512cbc30bb05.jpg",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);