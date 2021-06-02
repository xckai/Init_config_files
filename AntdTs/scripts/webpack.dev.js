const commonConfig = require('./webpack.commom');
module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool: 'eval',
  devServer: {
    compress: true,
    port: 9000
  }
};
