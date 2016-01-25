module.exports = {
  entry: './App/App',
  output: {
    filename: 'scripts/all.js'
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },

  watch: true
}
