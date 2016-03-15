var path = require('path');

module.exports = {
    output: {
        filename: 'app.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'] }
        ]
    }
}