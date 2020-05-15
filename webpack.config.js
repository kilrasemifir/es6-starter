const NodemonPlugin = require('nodemon-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.js',
    'mode':'none',
    watch:true,
    target: "node",
    output: {
        filename: 'main.js',
        path: path.resolve('./dist')
    },
    module:{
        rules: [
            {
                test: /\.js?$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins: [
        new NodemonPlugin({
            ignore:['node_modules/*'],
            ext:'js'
        })
    ]
}