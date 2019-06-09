const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common');

module.exports = merge(common, {
   mode: 'production',
   output: {
      filename: 'bundle.[contentHash].js',
      path: path.resolve(__dirname, 'build')
   },
   module: {
      rules: [
         {
            test: /\.s?css$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               {
                  loader: 'postcss-loader',
                  options: {
                     ident: 'postcss',
                     plugins: () => [ autoprefixer() ]
                  }
               },
               'sass-loader'
            ]
         }
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({ filename: 'styles.[contentHash].css' }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         template: './src/template.html',
         favicon: './src/assets/favicon.png',
         minify: {
            removeComments: true,
            removeAttributeQuotes: true,
            collapseWhitespace: true
         }
      })
   ],
   optimization: {
      minimizer: [ new OptimizeCssAssetsPlugin(), new TerserPlugin() ]
   }
});
