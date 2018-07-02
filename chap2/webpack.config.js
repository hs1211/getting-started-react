var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
module.exports =  {
  entry: [
    __dirname + '/src/app.js'
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
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

  // entry:  __dirname + "/app/App.js",
  // output: {
  //   path: __dirname + "/public",
  //   filename: "bundle.js"
  // },
  // module: {
  //   rules:[{
  //     test: /\.jsx?$/,
  //     loader: 'babel-loader',
  //     query: {presets: ['es2015', 'react'] }
  //   }]
  // },
  // devServer: {
  //   contentBase: "./public",
  //   colors: true,
  //   historyApiFallback: true,
  //   inline: true
  // },
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};
