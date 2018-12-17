/**
 * Created by zhanghaov on 2018/3/30.
 * 使用webpack,需要在根目录下配置webpack.config.js
 */

//webpack.config.js 结构
module.exports = {
    entry:{}, //入口文件，指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
    output:{},//出口，告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
    module:{},//loader，让 webpack 能够去处理那些非 JavaScript 文件,css文件,sass、less、es6
    plugins:[],//插件，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量
    devServer:{}//基于node.js构建本地服务器，浏览器监听，自动刷新显示修改后的结果（js文件,修改html文件不刷新）
}

