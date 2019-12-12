安装依赖
npm install
启动
npm run serve

###准备工作
1 新建一个style文件夹
  写好初始化样式 在main.js  通过 import './style/index.scss' 引入

2 引入element组件
 先通过npm i element-ui -S  来安装
 后在main.js     import ElementUI from 'element-ui'
                 import 'element-ui/lib/theme-chalk/index.css'

3安装 axios
    $ npm install axios --save
    后引入并绑定到原型上

4 api
将接口绑定到原型上

###项目开始
1. 先添加element组件按钮,后接列表
2.通过 queryAll 接口拿到所有的数据,并渲染到列表上
3.新建一个add页面 点击跳转到改页面
4.在add页面上 添加两个输入框和两个按钮,并通过add接口完成添加的操作
5.回到原来界面,通过 del接口来完成删除操作
6.在add页面上用updata完成修改,并在原界面使用type属性 区分add和updata
7.使用queryName接口完成查询 
8.再加个重置与查询相配

