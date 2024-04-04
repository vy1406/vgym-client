//enables full path usage across all
// platforms using node.js.
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');


const envConfig = {
    //adds source mapping ,usfull for debuging in browser
    devtool: 'source-map',
    mode: 'development',
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.env.dev'), 
        }),
        
    ],

};

module.exports = merge(baseConfig, envConfig);

