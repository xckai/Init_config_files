const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
        mode: "development",
        entry: {
            main: "./src/main.js",
            style:"./src/style.less"
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './src',
            port: 9000
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template:"./src/index.html"
            })

        ],
        module: {
            rules: [{
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                },{
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader", options: {
                            strictMath: true,
                            noIeCompat: true
                        }
                    }]
                }
            ],  
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    }