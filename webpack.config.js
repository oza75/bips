const path = require('path');
const isDevelopment = false;

module.exports = {
  entry: {
    index: "./lib/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  mode: "development"
};
