'use strict';

require('dotenv').load();

const
  HTMLPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins:[
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(process.env.API_URL)
    })
  ],
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
};
