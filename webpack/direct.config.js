var path = require('path');
var webpack = require('webpack');
var FolderReplacementPlugin = require('./plugins/FolderReplacementPlugin.js');
 
module.exports = {
    output: {
        filename: 'app.js',
        publicPath: '/app/'
    },
    
    watch: true,

    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.tsx']
    },
    
    externals: {
        angular: 'angular',
        'restful.js': 'restful'
    },
    
    module: {
        loaders: [
            {
                test: /\.ts$/, 
                loader: 'awesome-typescript-loader', 
                exclude: [/\.(spec|e2e)\.ts$/]
            }
        ]
    },

    plugins: [
        new FolderReplacementPlugin(/app\\common/, 'app\\direct')
    ]
}