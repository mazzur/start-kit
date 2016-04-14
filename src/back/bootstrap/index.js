'use strict';

const
    env = require('../../../env'),
    db = require('./db'),
    preMiddleware = require('./preMiddleware'),
    controllers = require('../controllers');

module.exports = (app) => {
    db(`${env.DB_URL}/${env.DB_NAME}`);
    preMiddleware(app);
    return app.use(controllers);
};
