const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WarpifyPlugin = require('@warpjs/webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyPlugin([
      { from: 'public', to: '.' }
    ]),
    new WarpifyPlugin({
      exclude: [/node_modules/],
      include: [/\.js$/],
      config: {
        project: {
          userId: 'YOUR_USER_ID', // Go to starbase.warpjs.com to get your User ID
          name: 'demo'
        }
      }
    })
  ]
}
