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
  };

const typeDefs = gql`
  type Employee {
    id: Int
    name: String
    email: String
    age: Int
    salary:Int
  }

  type Query {
    employees: [Employee]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});