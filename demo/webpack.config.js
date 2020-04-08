const path = require('path')

module.exports = {
  entry: path.resolve(__dirname + '/src'),

  devServer: {
    port: 3008,
    contentBase: path.resolve(__dirname + '/public')
  },

  output: {
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      { test: /\.(js|jsx)?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
