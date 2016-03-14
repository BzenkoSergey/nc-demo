var path = require('path');
   
module.exports = {
    entry: './src/app/nc.ts',
    
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    
    //watch: true,
    
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ }
    ]
  }
}