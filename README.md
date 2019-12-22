## 创建git仓库

第一步

点击+号的 newrepository,新建一个仓库,按照步骤执行下去



第二步

新建一个文件夹,点击鼠标右键的 Git Bash Here

拉取仓库 git clone后接个空格,再放上地址链接,完毕后,回去刚才文件看看有没有灰色的.git文件夹



第三步

此时再次点击鼠标右键的 Git Bash Here ,看顶端有没有出现蓝色的master,有的话就可以是用git命令行来进行操作了



###git操作命令:

git init //初始化本地git环境

git status //  查看状态

git clone XXX//克隆一份代码到本地仓库  xxx为地址链接

git pull //把远程库的代码更新到工作台

git fetch //把远程库的代码更新到本地库

git add . //把本地的修改加到stage中

git commit -m 'comments here' //把stage中的修改提交到本地库

git push //把本地库的修改提交到远程库中



### 用vue cli4.0 搭建vue项目

1 以搭建 vue-content为名的vue前端项目为例

在终端输入 vue create vue-content

2 手动选择配置

![手动.png](C:/Users/Administrator/Desktop/截图/手动.png)

3 选择完后,等待安装完成

![选择1.png](C:/Users/Administrator/Desktop/截图/选择1.png)

4.脚手架安装完成

![完成.png](C:/Users/Administrator/Desktop/截图/完成.png)



5.安装依赖 npm install

