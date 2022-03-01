const webpack = require('webpack');
const webPackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'cheap-source-map',
};

module.exports = webPackMerge(baseConfig, devConfig);
