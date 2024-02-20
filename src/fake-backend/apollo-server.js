import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers.mjs';

import 'dotenv/config';

const typeDefs = `
  type CoffeeMachine {
    size: String
    drinkCount: Int
    imageUrl: String
  }

  type Query {
    getCoffeeMachineConfigurations: [CoffeeMachine]
  }

  type Mutation {
    addToStorage(size: String, drinkCount: Int): CoffeeMachine
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });
const PORT = process.env.COFFEE_BACKEND_PORT || 4000;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
