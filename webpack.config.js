const webpack = require('webpack');

module.exports = env => {
  let dev = false;
  let testing = false;
  if (env.development) {
    dev = true;
  }
  if (env.testing) {
    testing = true;
  }
  return {
    entry: [
      'babel-polyfill',
      './client/index.js',
    ],
    output: {
      path: __dirname,
      filename: './build/bundle.js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/,
          use: [
            { loader: 'url-loader' }
          ]
        }
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEVELOPMENT__: JSON.stringify(dev),
        __TESTING__: JSON.stringify(testing),
      })
    ]
  }
};
