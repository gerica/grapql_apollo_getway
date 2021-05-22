import logger from '../../../utils/logger.js';

export default {
  Query: {
    apiGetwayVersion: () => {
      logger.info('api gateway info');
      return 'Version Radiolife gateway: 0.0.1-rc-04';
    },
  },
};
