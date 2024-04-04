//enables full path usage across all
// platforms using node.js.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //bundels each js file together,
    //in case there other js files besides index.js they need
    //to be added here as well.
    entry: {
        bundle: path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        //used for assets like pngs, jpgs, etc to keep naming clear.
        assetModuleFilename: '[name][ext]'
    },
    
    devServer: {
        historyApiFallback: true,
        proxy: {
          '/api': {
            target: 'http://localhost:5000',//TODO: change this to actual port of web api server
            changeOrigin: true
          }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                //allows backwords compatibility with ES6
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,//these files are already transpiled
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset/resource',
                
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'VGym App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
            
    
}