const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
  entry: './src/index.js',
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
    plugins:[new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                "style-loader", 
                "css-loader", 
            ]
            },
            {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
        ],
    },
    optimization: {
      runtimeChunk:'single',
    },
};