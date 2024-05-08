import User from "./models/User.js";
import Finance from "./models/Finance.js";

export const resolvers = {
  Query: {
    users() {
      return User.find();
    },
  },
  Mutation: {
    createNewUser: async (
      _,
      args
      // { userId, username, currency, profileDp, email, password }
    ) => {
      let user = {
        ...args.user,
        _id: 723456789123,
      };
      const newUser = new User(user);
      const createdUser = await newUser.save();
      return createdUser;
    },
    editUser: async (_, args) => {
      const user = await User.findOneAndUpdate(
        args.userId,
        {
          $set: {
            username: args.username,
            currency: args.currency,
            profileDp: args.profileDp,
            email: args.email,
            password: args.password,
          },
        },
        { new: true }
      );
      return user;
    },
    createFinance: async (_, args) => {
      const newFinance = new Finance({
        ...args.finance,
        userId: 723456789123,
        date: new Date(),
      });
      console.log(newFinance);
      const createdFinance = await newFinance.save();
      return createdFinance;
    },

    editFinance: async (_, args) => {
      const finance = await Finance.findByIdAndUpdate(
        args.userId,
        {
          $set: {
            startingBalance: args.startingBalance,
            currentBalance: args.currentBalance,
            income: args.income,
            savings: args.savings,
            expenses: args.expenses,
            goals: goals.expense,
          },
        },
        { new: true }
      );
      return finance;
    },

    updateExpense: async (_, { input }) => {
      const { id, item, price, date } = input;

      // Find the expense document by id
      const expense = await Finance.findById(id);
      if (!expense) {
        throw new Error(`Expense with ID ${id} not found`);
      }

      // Update the expense fields
      if (item) {
        expense.item = item;
      }
      if (price) {
        expense.price = price;
      }
      if (date) {
        expense.date = new Date(date);
      }

      // Save the updated expense
      await expense.save();
      return expense;
    },
  },
};
