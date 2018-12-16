require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 600 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 6
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, 'variables.env'),
        systemvars: true
      })
    ];

    return config;
  }
};
