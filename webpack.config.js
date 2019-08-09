const path = require('path'); // nodejs的路径模块

module.exports = {
  mode: 'production',
  entry: './src/index.js', // 要打包的入口文件
  module: { // 配置当打包一个模块儿的时候干啥
    rules: [{
      test: /\.jpg$/, // 当打包以 .jpg 结尾的文件时使用下一行的 loader 来帮助我们坐打包
      use: {
        loader: 'url-loader', // 我们需要先安装一下 file-loader 这个工具 -> npm install file-loader -D
        options: { // 配置参数参考文档
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 2048
        }
      }
    }, {
      test: /\.css$/, // 当打包以 .jpg 结尾的文件时使用下一行的 loader 来帮助我们坐打包
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        }
      ]
    }, {
      test: /\.(eot|ttf|svg|woff)$/, // 当打包以 .jpg 结尾的文件时使用下一行的 loader 来帮助我们坐打包
      use: {
        loader: 'file-loader'
      }
    }]
  },
  output: {
    filename: 'sadhu.js',
    path: path.resolve(__dirname, 'dist') // 此时的__dirname就是配置文件的当前路径,dist就是该路径下打包后的文件夹
  }
}