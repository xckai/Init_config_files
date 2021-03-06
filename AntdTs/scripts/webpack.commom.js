/*
 * @Date: 2021-05-03 14:49:30
 * @LastEditTime: 2021-05-03 15:05:43
 * @Description:
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.tsx'
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }), new ForkTsCheckerWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
                // modifyVars: {
                //   'primary-color': 'red'
                // }
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  stats: {
    colors: true,
    env: true,
    errors: true,
    performance: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'common',
          test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录下的文件
          priority: -10
        }
        // },
        // basicCommon: {
        //   priority: -5,
        //   name: 'basic_common',
        //   test: function (module, chunk) {
        //     return (
        //       module.resource &&
        //       module.resource.endsWith('.js') &&
        //       (module.resource.includes(`react`) || module.resource.includes(`antd`) || module.resource.includes(`moment`))
        //     );
        //   }
        // }
      }
    }
  }
};
