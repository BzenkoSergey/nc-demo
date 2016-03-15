var path = require('path');
var FolderReplacementPlugin = require('./plugins/FolderReplacementPlugin.js');
 
module.exports = {
    output: {
        filename: 'app.js'
    },
    
    watch: true,

    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'] }
        ]
    },

    plugins: [
        new FolderReplacementPlugin(/app\\components/, 'app\\direct\\components')
    ]
}