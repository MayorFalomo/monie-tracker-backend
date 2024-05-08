import mongoose from "mongoose";
const FinanceSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   required: false,
    // },
    userId: {
      type: String,
      // ref: "User",
      required: false,
    },
    startingBalance: {
      type: Number,
      required: false,
    },
    currentBalance: {
      type: Number,
      required: false,
      // default: 0.0,
    },
    income: {
      type: Number,
      required: false,
    },
    expenses: [
      {
        item: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
          default: 0.0,
        },
        date: {
          type: Date,
          required: false,
        },
      },
    ],
    savings: {
      type: Number,
      required: false,
      default: 0.0,
    },
    goals: [
      {
        goal: {
          type: String,
          required: true,
        },
        targetAmount: {
          type: Number,
          required: true,
        },
        targetDate: {
          type: Date,
          required: false,
        },
        completed: {
          type: Boolean,
          required: false,
        },
      },
    ],
    date: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Finance", FinanceSchema);
