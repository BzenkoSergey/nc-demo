var path = require('path');

module.exports = {
    output: {
        filename: 'app.js'
    },

    watch: true,
    
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
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
    }
}