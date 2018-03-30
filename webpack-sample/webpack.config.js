/**
 * Created by zhanghaov on 2018/3/24.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',//Source Maps
    entry: "./app/main.js",//����ļ�
    output: {
        path: path.resolve(__dirname,'build'),//����
        filename: "bundle.js"//���������ļ����ļ���
    },
    devServer:{
        contentBase:'./public',//ҳ��Ŀ¼
        historyApiFallback:true,//����ת
        inline:true //ʵʱˢ��
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
        new HtmlWebpackPlugin ({ //index.html ģ����
            template:__dirname + '/app/index.tmpl.html'
        })
    ]
}

