const path = require('path'); // подключаем встроенный модуль в node.js(это обьект имеющий ряд методов
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
      port: 1308
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ],
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
               },
            ],
         }
      ],
   },
}
