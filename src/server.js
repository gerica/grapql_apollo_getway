/* eslint-disable max-len */
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs';

import config from './config/config.js';
import logger from './utils/logger.js';

const { PORT, PATH_GRAPHQL } = config;

// const supergraphSchema = readFileSync(`${process.cwd()}/src/graphql/supergraph.graphql`).toString();
const supergraphSchema = readFileSync(`${process.cwd()}/src/graphql/supergraph.graphql`).toString();

const gateway = new ApolloGateway({
  supergraphSdl: supergraphSchema,
});

const server = new ApolloServer({
  gateway,
  // Subscriptions are not currently supported in Apollo Federation
  subscriptions: false,
});

server
  .listen({ port: PORT, path: PATH_GRAPHQL })
  .then(({ url }) => {
    logger.info(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    logger.error(err);
  });
