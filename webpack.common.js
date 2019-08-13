const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
		main: './src/index.js'
  },
  module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		}, {
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
				"presets": [["@babel/preset-env", {
					targets: {
						chrome: "67", // Chrome 版本大于67的话 babel 就不转译代码了
					},
					useBuiltIns: 'usage' // 这个配置是实现 按需加载 babel polyfill, 而不是一次性把所有 polyfill 打包进去。并且配置了这项后，会自动在业务代码中引入 polifill， 不用我们手动 import 引入了。
				}]]
			}
		}]
  },
  plugins: [new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}