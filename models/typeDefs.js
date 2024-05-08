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
    targetAmount: Int!
    targetDate: String!
    completed: Boolean
  }
  type Finance {
    _id: ID!
    userId: String!
    startingBalance: Int
    currentBalance: Int
    income: Int
    expenses: [Expenses]
    savings: Int
    goals: [Goals]
    date: String
  }
  type Query {
    users: [User]
    finances: [Finance]
  }
  type Mutation {
    createNewUser(user: createUserInput!): User
    editUser(id: ID!, edits: editUserInput!): User
    createFinance(finance: createFinanceInput!): Finance
    editFinance(id: ID!, edits: editFinanceInput!): Finance
    updateExpense(input: UpdateExpenseInput!): Expenses
    # deleteGame(id: ID!): [Game]
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
    targetDate: String
    completed: Boolean
  }
  input editFinanceInput {
    userId: String!
    startingBalance: Float
    currentBalance: Float
    income: Float
    expenses: [ExpenseInput]
    savings: Float
    goals: [GoalInput]
    date: String
  }
  input UpdateExpenseInput {
    id: ID!
    item: String
    price: Float
    date: String
  }
`;
