var path = require('path');

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: './bundle.js',
    library: 'myApp'
  },
  mode: 'production',
};
