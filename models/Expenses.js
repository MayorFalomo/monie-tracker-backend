import mongoose from "mongoose";

const Expenses = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: false,
    },
    item: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
      default: 0.0,
    },
    icon: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Expense", Expenses);
