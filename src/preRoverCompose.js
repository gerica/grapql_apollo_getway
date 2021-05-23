import fs from 'fs';
import yaml from 'js-yaml';
import config from './config/config.js';
import logger from './utils/logger.js';

logger.info('***************** Init Config supergraph ******************');
logger.info('Configure supergraph-config.yaml');
const file = './src/supergraph-config.yaml';
const dirGraphql = './src/graphql';

const filesGraphql = [];
function createConfig() {
  logger.info('create config method');
  const objToWrite = {
    subgraphs: {},
  };

  if (filesGraphql.length > 0) {
    filesGraphql.forEach((graphql) => {
      const index = graphql.indexOf('.graphql');
      const nameService = graphql.slice(0, index);
      objToWrite.subgraphs[nameService] = {
        routing_url: config[nameService],
        schema: { file: `./graphql/${graphql}` },
      };
    });
  }

  logger.info(objToWrite);

  try {
    const yamlStr = yaml.safeDump(objToWrite);
    fs.writeFileSync(file, yamlStr, 'utf8');

    logger.info('Create config success');
  } catch (e) {
    logger.error(e);
  }
  logger.info('***************** End Config supergraph ******************');
}

fs.readdir(dirGraphql, (err, filenames) => {
  if (err) {
    logger.error(err);
  }

  filenames.forEach((f) => {
    if (f.includes('.graphql')) {
      filesGraphql.push(f);
    }
  });
  createConfig();
});
