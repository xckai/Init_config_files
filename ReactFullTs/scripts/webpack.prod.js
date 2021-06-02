/*
 * @Date: 2021-05-02 21:52:48
 * @LastEditTime: 2021-05-03 14:48:32
 * @Description:
 */
const commonConfig = require("./webpack.commom");
module.exports={
  ...commonConfig,
  mode: 'production'
}