/**
 * Created by zhanghaov on 2018/3/24.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',//Source Maps
    entry: "./app/main.js",//入口文件
    output: {
        path: path.resolve(__dirname,'build'),//出口
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer:{
        contentBase:'./public',//页面目录
        historyApiFallback:true,//不跳转
        inline:true //实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader:'babel-loader'
                },
                exclude: /node_modules/
            },{
                test:/\.css$/,
                use:[{
                    loader:'style-loader',
                },{
                    loader:'css-loader'
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({ //index.html 模板插件
            template:__dirname + '/app/index.tmpl.html'
        })
    ]
}

