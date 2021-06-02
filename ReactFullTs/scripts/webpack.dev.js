/*
 * @Date: 2021-05-02 21:52:48
 * @LastEditTime: 2021-05-03 14:48:22
 * @Description:
 */
const commonConfig = require('./webpack.commom');
module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool:"eval",
  devServer: {
    compress: true,
    port: 9000,
  },
};
