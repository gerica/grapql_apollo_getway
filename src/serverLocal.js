import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

import { importSchema } from 'graphql-import';
import config from './config/config.js';
import logger from './utils/logger.js';
import resolvers from './graphql/local/resolvers/index.js';

const { PORT_LOCAL, PATH_GRAPHQL } = config;
const typeDefs = gql(importSchema('**/apiLocal.gql'));

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources: () => ({
    userAPI: 'desenv',
  }),
});

// The `listen` method launches a web server.
server.listen({ port: PORT_LOCAL, path: PATH_GRAPHQL }).then(({ url }) => {
  logger.info(url, 'Running a GraphQL API server at');
});
