/**
 * Created by zhanghaov on 2018/3/30.
 * ʹ��webpack,��Ҫ�ڸ�Ŀ¼������webpack.config.js
 */

//webpack.config.js �ṹ
module.exports = {
    entry:{}, //����ļ���ָʾ webpack Ӧ��ʹ���ĸ�ģ�飬����Ϊ�������ڲ�����ͼ�Ŀ�ʼ
    output:{},//���ڣ����� webpack ������������������� bundles���Լ����������Щ�ļ�
    module:{},//loader���� webpack �ܹ�ȥ������Щ�� JavaScript �ļ�,css�ļ�,sass��less��es6
    plugins:[],//���������ķ�Χ�������Ӵ���Ż���ѹ����һֱ�����¶��廷���еı���
    devServer:{}//����node.js�������ط�������������������Զ�ˢ����ʾ�޸ĺ�Ľ����js�ļ�,�޸�html�ļ���ˢ�£�
}

