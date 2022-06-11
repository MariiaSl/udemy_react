const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/script.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    module: {
      rules: [
        {
          test: /.js$/,
          use: ['babel-loader'],
        },
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      hot: true,
    },
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        // eslint-disable-next-line comma-dangle
      })
    );
  }

  return config;
};
