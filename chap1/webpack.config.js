module.exports = {
  entry: [
    './source/app.js'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    port: 7777
  },
  module: {
    rules:[{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {presets: ['es2015', 'react'] }
    }]
  }
}