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
    // expenses: [
    //   {
    //     item: {
    //       type: String,
    //       required: false,
    //     },
    //     price: {
    //       type: Number,
    //       required: false,
    //       default: 0.0,
    //     },
    //     icon: {
    //       type: String,
    //       required: false,
    //     },
    //     //It would be more like category
    //     category: {
    //       type: String,
    //       required: false,
    //     },
    //     date: {
    //       type: Date,
    //       required: true,
    //     },
    //   },
    // ],
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
        currentAmount: {
          type: Number,
          required: false,
        },
        targetDate: {
          type: Date,
          required: false,
        },
        completed: {
          type: Boolean,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        icon: {
          type: String,
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
