const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        sample1: './src/sample1.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
}