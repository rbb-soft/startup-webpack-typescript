const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        watchFiles: ["src/*.html"],
        hot: true,
      },
    entry : './src/app.ts',
    output : {
        path: __dirname + '/build',
        filename : 'bundle.js' 
    },
    module:{
        rules : [
            {
                test : /\.css$/,
                use: [
                    {loader : 'style-loader'},
                    {loader : 'css-loader'}
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins:[
        new htmlWebPackPlugin({
            template: './src/index.html'
        })
    ]


}