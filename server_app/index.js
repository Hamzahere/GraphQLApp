const { ApolloServer, gql } = require('apollo-server');

const employees = [
    {
        "id": 1,
        "name": "Ali",
        "email": "ali@gmail.com",
        "age": 21,
        "salary": 40000
    },
    {
        "id": 2,
        "name": "Mohsin",
        "email": "mohsin@gmail.com",
        "age": 21,
        "salary"  : 35000
    },
    {
        "id": 3,
        "name": "Aamir",
        "email": "aamir@gmail.com",
        "age": 21,
        "salary" : 60000
    }
]

const resolvers = {
    Query: {
      employees: () => employees,
    },

    Mutation: {
      addEmployee: (e, { input }) => {
        console.log(input)
        employees.push(
          {
            name: input.name,
            age: input.age,
            email: input.email,
            salary:input.salary,
            id: input.id
          }
        )
        return {
          name: input.name,
            age: input.age,
            email: input.email,
            salary:input.salary,
            id: input.id
        }
      }
    }
  };

const typeDefs = gql`
  type Employee {
    id: Int
    name: String
    email: String
    age: Int
    salary:Int
  }

  input EmpInput {
    id: Int
    name: String
    email: String
    age: Int
    salary:Int
  }

  type Query {
    employees: [Employee]
  }

  type Mutation {
    addEmployee(input: EmpInput): Employee
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});