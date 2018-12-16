const nodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_GEOCODER_API_KEY
};

const geocoder = nodeGeocoder(options);

module.exports = geocoder;
