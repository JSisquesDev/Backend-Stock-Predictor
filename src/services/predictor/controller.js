const model = require('./model');
const logger = require('../../util/logger');

module.exports = {
  async predict(req, res) {
    var reqCommand = req.params.COMMAND;
    logger.info(`Comando de la petición: "` + reqCommand + `"`);

    var result = await model.predict(reqCommand);

    return res.send(result);
  },
};
