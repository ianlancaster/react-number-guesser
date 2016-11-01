const path = require('path')

module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'react'] } }, // eslint-disable-line
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=20000' },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
  devServer: {
    address: '111.111.111.111',
    port: 8080,
  },
}
