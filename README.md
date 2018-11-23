# mini-component
微信小程序组件集合

#### 目录结构

* component-----------------------------------组件总目录
   * 目录一------------------------------------组件
   * 目录二------------------------------------组件二
* component_index-----------------------------使用组件demo主页面
   * 目录一------------------------------------组件一demo
   * 目录二------------------------------------组件二demo
   * component_index.wxml---------------------小程序页面 通过这个页面汇集组件demo的调用  
   
>      组件使用说明在对应组件demo的wxml页面 
  
#### 如何使用 将demo弄进微信小程序
 
  1.直接创建clone此项目
  2.创建小程序
  3.将项目放在page目录下，app.json中 添加‘pages’ 并将  component_index/component_index 设置为主页
  ###### 注意 
       图片上传 需要用到  app.js 中的 imgageUploadUrl属性  所以需要在app.js中添加此属性
 
#### 主界面    
       组件更新此界面，可能不会更新，需知有多少组件前看下面组件截图
 ![主界面](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/%40A8%7BE30QME%5B%5B8FEW0YZM9J7.png)
#### 效果图

1.图片上传，裁剪    

![图片上传，裁剪](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/A%5BB%251QD%7EQ%5DY5UU%25YKWD%7B0P7.png)
 
2.上划刷新         

![上划刷新](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/4%7E1J%24%29B9%28T%29986KWM2L3XE8.png)  

3.图片懒加载      

![图片懒加载](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/Y%7DUYM73%5D%7EXMKD%7D%29ZXRZ3%7E%28W.png)  
