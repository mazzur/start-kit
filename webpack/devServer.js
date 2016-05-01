'use strict';

const
    layout = require('../layout'),
    env = require('../env'),
    HOST = 'localhost';

module.exports = {
    contentBase: layout.target.buildDir,
    hot: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    inline: true,
    progress: true,
    host: HOST,
    port: env.PORT + 1,
    proxy: {
        '/api/*': `http://${HOST}:${env.PORT}`
    }
};
