const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WarpifyPlugin = require('@warpjs/webpack-plugin')

require('dotenv').config()

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
          userId: process.env.WARPJS_USER_ID,
          name: process.env.WARPJS_PROJECT_NAME
        },
        // server initialization
        server: {
          init: {
            import: './init-server.js'
          }
        }
      }
    })
  ]
}
