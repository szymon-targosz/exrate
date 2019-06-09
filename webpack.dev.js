const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
   mode: 'development',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
   },
   devtool: 'source-map',
   module: {
      rules: [
         {
            test: /\.s?css$/,
            use: [
               'style-loader',
               {
                  loader: 'css-loader',
                  options: {
                     importLoaders: 2,
                     sourceMap: true
                  }
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     ident: 'postcss',
                     sourceMap: true,
                     plugins: () => [ autoprefixer() ]
                  }
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/template.html',
         favicon: './src/assets/favicon.png'
      })
   ]
});
