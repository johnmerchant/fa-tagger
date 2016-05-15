const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const pkg = require('./package.json');

const outputFileTemplateSuffix = '-' + pkg.version;

module.exports = {
  entry: { main: ['./src/main'] },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]' + outputFileTemplateSuffix + '.js',
    chunkFilename: '[id]' + outputFileTemplateSuffix + '.js'
  },
  plugins: [
    new AureliaWebpackPlugin(),
    new ProvidePlugin({ Promise: 'bluebird' }),
    new HtmlWebpackPlugin({
      title: 'FA Tagger - ' + pkg.version,
      template: 'index.prod.html',
      filename: 'index.html'
    })
  ],
  resolve: { root: [path.resolve('./')] },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
    ]
  }
};