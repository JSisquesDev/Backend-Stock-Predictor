const logger = require('../../util/logger');

module.exports = {
  async predict(stock, startDate, endDate) {
    logger.info('Entering predict()');
  },
  async predictBetweenDate(stock, startDate, endDate) {
    logger.info('Entering predictBetweenDate()');
  },
  async predictAtDate(stock, date) {
    logger.info('Entering predictAtDate()');
  },
};
