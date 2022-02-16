const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: './src/images/icon.png',
      templateContent: `
        <!doctype html>  
        <html lang="en" >
          <head>
            <meta charset="utf-8">
            <title>Pokemon App</title>
            <meta name="viewport" content="width=device-width,initial-scale=1">
          </head>
          <body>
            <div id="root">
            </div>
          </body>
        </html>
      `
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 15000 } },
      },
    ],
  },
};

module.exports = config;