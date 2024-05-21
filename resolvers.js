import User from "./models/User.js";
import Finance from "./models/Finance.js";
import Expenses from "./models/Expenses.js";

export const resolvers = {
  Query: {
    //Query to return a single user by their id
    users: async (_, args) => {
      return User.findById(args.id);
    },
    //Query to return a single Finance by their id
    finances: async (_, args) => {
      return Finance.find(args.userId);
    },
    expenses: async (_, args) => {
      return Expenses.find(args.userId);
    },
    //Query to return all the finance of a user
    allUserFinances: async (_, args) => {
      return Finance.find({ userId: args.userId });
    },
    //Query to return all the users
    allUsers: async () => {
      const users = User.find({});
      return users;
    },
  },
  Mutation: {
    createNewUser: async (_, args) => {
      let user = {
        ...args.user,
        // _id: "463f3c41940cb5234dc71t1b",
        // userId: "463f3c41940cb5234dc71t1b",
      };
      const newUser = new User(user);
      const createdUser = await newUser.save();
      return createdUser;
    },
    editUser: async (_, args) => {
      const user = await User.findOneAndUpdate(
        args._id,
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
        // userId: 723456789123,
        date: new Date(),
      });
      // console.log(newFinance);
      const createdFinance = await newFinance.save();
      return createdFinance;
    },

    //Function to edit finance values
    editFinance: async (_, args) => {
      const finance = await Finance.findByIdAndUpdate(
        args.id,
        {
          $set: {
            startingBalance: args.edits.startingBalance,
            currentBalance: args.edits.currentBalance,
            income: args.edits.income,
            savings: args.edits.savings,
          },
        },
        { new: true }
      );
      return finance;
    },

    createExpense: async (_, args) => {
      // console.log(args, "args");
      const newExpense = new Expenses({
        ...args.expense,
        date: Date.now(),
      });
      // console.log(newExpense);
      const createdFinance = await newExpense.save();
      return createdFinance;
    },

    //Function to update an expense values
    updateExpense: async (_, args) => {
      // args show you the value that you're sending to the server
      const { input } = args;

      // Find the expense document by id
      const expense = await Expenses.findById(input.id);
      if (!expense) {
        throw new Error(`Expense with ID ${input.id} not found`);
      }

      if (expense) {
        console.log(expense);
        // Find the expense item in the expenses array using the id
        // const expenseItem = expense.expenses.find((expense) => expense.id);

        // if (expenseItem) {
        //   expenseItem.item = input.item ? input.item : expenseItem.item;
        //   expenseItem.price = input.price ? input.price : expenseItem.price;
        //   expenseItem.date = Date.now();

        //   // Save the updated expense
        //   await expense.save();
        //   return expenseItem;
        // }
        // else {
        //   return expenseItem;
        // }
      }
    },

    //Function to update goal values
    updateGoal: async (_, args) => {
      // args show you the value that you're sending to the server
      const { input } = args;

      // Find the expense document by id
      const expense = await Finance.findById(input.id);
      if (!expense) {
        throw new Error(`Expense with ID ${input.id} not found`);
      }

      if (expense) {
        // Find the expense item in the expenses array using the id
        const goalItem = expense.goals.find((goal) => goal.id);

        if (goalItem) {
          goalItem.goal = input.item ? input.goal : goalItem.goal;
          goalItem.targetAmount = input.targetAmount
            ? input.targetAmount
            : goalItem.targetAmount;
          goalItem.currentAmount = input.currentAmount
            ? input.currentAmount
            : goalItem.currentAmount;
          goalItem.targetDate = input.targetDate
            ? input.targetDate
            : goalItem.targetDate;
          goalItem.completed = input.completed
            ? input.completed
            : goalItem.completed;
          goalItem.description = input.description
            ? input.description
            : goalItem.description;

          // Save the updated expense
          await expense.save();
          return goalItem;
        } else {
          return expense;
        }
      } else {
        return expense;
      }
    },
    //Deleted Finance
    deleteFinance: async (_, args) => {
      // console.log(args.id, "args");
      const expense = await Finance.findByIdAndDelete(args.id);
      if (!expense) {
        throw new Error(`Expense with ID ${args.id} not found`);
      }
      return expense;
      // Remove the expense from the database
    },

    //Deleted a Expense in Finance
    deleteExpense: async (_, args) => {
      const { input } = args;

      // Find the finance document by id and pull the expense from the expenses array
      const finance = await Finance.findByIdAndUpdate(args.id);

      // console.log(finance, "finance");

      if (!finance) {
        throw new Error(`Finance document with ID ${input.id} not found`);
      }

      // Find the deleted expense by finding the index of the expense to be deleted
      const expenseIndex = finance.expenses.findIndex(
        (e) => e.id.toString() === input.id
      );

      if (expenseIndex === -1) {
        throw new Error(`Expense with ID ${input.id} not found`);
      }

      // Remove the expense from the expenses array
      const deletedExpense = finance.expenses.splice(expenseIndex, 1)[0];

      // Save the updated finance document
      await finance.save();

      return deletedExpense;
    },

    //Delete a Goal in goals inside Finance
    deleteGoal: async (_, args) => {
      const { input } = args;

      // Find the finance document by id and pull the expense from the expenses array
      const finance = await Finance.findByIdAndUpdate(args.id);

      if (!finance) {
        throw new Error(`Finance document with ID ${input.id} not found`);
      }

      // Find the deleted expense by finding the index of the expense to be deleted
      const goalIndex = finance.goals.findIndex(
        (e) => e.id.toString() === input.id
      );

      if (goalIndex === -1) {
        throw new Error(`Expense with ID ${input.id} not found`);
      }

      // Remove the expense from the expenses array
      const deletedGoal = finance.goals.splice(goalIndex, 1)[0];

      // Save the updated finance document
      await finance.save();

      return deletedGoal;
    },
  },
};
