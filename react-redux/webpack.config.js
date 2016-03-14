module.exports = {
  entry: './App/Main.js',
  output: {
    filename: 'scripts/all.js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  watch: true
}
