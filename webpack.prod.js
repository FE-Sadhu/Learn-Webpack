const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

const prodConfig = {
	mode: 'production', // 线上环境
	devtool: 'cheap-module-source-map', // 取消开发者模式下默认开启的 sourceMap
}

module.exports = merge(commonConfig, prodConfig);