const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({template : 'src/index.html'})
    ],  
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
                options: {
                    presets: [
                        [
                            "@babel/preset-react",
                            { runtime: "automatic" }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer:{
        open: true,
        port:3000,
    }
}