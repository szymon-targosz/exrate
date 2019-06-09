module.exports = {
   entry: {
      entry: [ '@babel/polyfill', './src/index.js' ],
   },
   module: {
      rules: [
         {
            test: /\.html$/,
            use: 'html-loader'
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         }
      ]
   }
};
