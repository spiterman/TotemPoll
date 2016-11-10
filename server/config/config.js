var _ = require('lodash');

var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  expireTime: 10 * 24 * 60 * 60, // In seconds so 10 days
  secrets: {
    jwt: process.env.JWT || 'Top Secret Code'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

var envConfig;

try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
} catch(err) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);
