import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    password: String
    profileDp: String
    email: String
    userId: String
    currency: String
    # notifications: []
    socials: [Socials]
    # createdAt: String
  }
  type Expenses {
    id: ID
    userId: String!
    item: String
    price: Float
    icon: String
    date: String
    category: String
  }
  type Goals {
    goal: String!
    targetAmount: Float!
    currentAmount: Float
    targetDate: String!
    completed: Boolean
    description: String
    icon: String
  }
  type Socials {
    facebook: String
    instagram: String
    twitter: String
    linkedin: String
  }

  type Finance {
    _id: ID!
    userId: String!
    startingBalance: Float
    currentBalance: Float
    income: Float
    # expenses: [Expenses]
    savings: Float
    goals: [Goals]
    date: String
  }
  # You must add a type Query for your get request in the graphql schema and a type mutation for any mutations
  # The square bracket is what you want graphql to return
  type Query {
    allUsers: [User]
    users(id: ID): User
    finances: [Finance]
    expenses: [Expenses]
    allUserFinances(userId: String): [Finance]
  }
  type Mutation {
    createNewUser(user: createUserInput!): User # For createUser I just need the user Details that i'd input
    editUser(id: ID!, edits: editUserInput!): User #To edit a user i'd need the id of the finance i want to edit and the details of what i want to edit
    createFinance(finance: createFinanceInput!): Finance # I just need to take in the inputs of the finance i need
    editFinance(id: ID!, edits: editFinanceInput!): Finance
    createExpense(id: ID!, expense: ExpenseInput!): Expenses
    updateExpense(id: ID!, input: updateExpenseInput!): Expenses
    updateGoal(id: ID!, input: updateGoalInput!): Goals
    deleteFinance(id: ID!): Finance
    deleteExpense(id: ID!, input: updateExpenseInput!): Expenses
    deleteGoal(id: ID!, input: updateGoalInput!): Goals
  }
  input createUserInput {
    _id: String!
    userId: String!
    username: String!
    password: String!
    profileDp: String!
    email: String!
    currency: String
    # notifications: []
  }
  input editUserInput {
    _id: String
    userId: String!
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
    # expenses: [ExpenseInput]
    savings: Float
    goals: [GoalInput]
    date: String
  }
  input ExpenseInput {
    id: ID
    userId: String!
    item: String
    price: Float
    date: String
    icon: String
    category: String
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
    # expenses: [ExpenseInput]
    savings: Float
    goals: [GoalInput]
    date: String
  }
  input updateExpenseInput {
    id: ID!
    item: String
    price: Float
    icon: String
    date: String
    category: String
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
