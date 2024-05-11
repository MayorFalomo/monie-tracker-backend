import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    profileDp: String!
    email: String!
    # userId: String
    currency: String
    # createdAt: String
  }
  type Expenses {
    item: String
    price: Int
    date: String
  }
  type Goals {
    goal: String!
    targetAmount: Float!
    currentAmount: Float
    targetDate: String!
    completed: Boolean
    description: String
  }
  type Finance {
    _id: ID!
    userId: String!
    startingBalance: Float
    currentBalance: Float
    income: Float
    expenses: [Expenses]
    savings: Float
    goals: [Goals]
    date: String
  }
  type Query {
    users: [User]
    finances: [Finance]
  }
  type Mutation {
    createNewUser(user: createUserInput!): User # For createUser I just need the user Details that i'd input
    editUser(id: ID!, edits: editUserInput!): User #To edit a user i'd need the id of the finance i want to edit and the details of what i want to edit
    createFinance(finance: createFinanceInput!): Finance # I just need to take in the inputs of the finance i need
    editFinance(id: ID!, edits: editFinanceInput!): Finance
    updateExpense(id: ID!, input: updateExpenseInput!): Expenses
    updateGoal(id: ID!, input: updateGoalInput!): Goals
    deleteFinance(id: ID!): Finance
    deleteExpense(id: ID!, input: updateExpenseInput!): Expenses
    deleteGoal(id: ID!, input: updateGoalInput!): Goals
  }
  input createUserInput {
    _id: String
    username: String!
    password: String!
    profileDp: String!
    email: String!
    currency: String
  }
  input editUserInput {
    _id: String
    username: String!
    password: String!
    profileDp: String!
    email: String!
    currency: String
  }
  input createFinanceInput {
    _id: String
    userId: String!
    startingBalance: Float
    currentBalance: Float
    income: Float
    expenses: [ExpenseInput]
    savings: Float
    goals: [GoalInput]
    date: String
  }
  input ExpenseInput {
    item: String
    price: Float
    date: String
  }
  input GoalInput {
    goal: String
    targetAmount: Float
    currentAmount: Float
    targetDate: String
    completed: Boolean
    description: String
  }
  input editFinanceInput {
    id: ID
    userId: String
    startingBalance: Float
    currentBalance: Float
    income: Float
    expenses: [ExpenseInput]
    savings: Float
    goals: [GoalInput]
    date: String
  }
  input updateExpenseInput {
    id: ID!
    item: String
    price: Float
    date: String
  }
  input updateGoalInput {
    id: ID!
    targetAmount: Float
    currentAmount: Float
    targetDate: String
    completed: Boolean
    description: String
  }
`;
