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
  
#### 效果预览--关注我的小程序即可看到效果

![逐运人生](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/gh_3a849a69c21a_258.jpg)

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

##### 1.图片上传，裁剪    ----固定裁剪框和比例设置都由开发者选择属性是否使用    

![图片上传，裁剪](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/A%5BB%251QD%7EQ%5DY5UU%25YKWD%7B0P7.png)
 
##### 2.上划刷新         

 ![上划刷新](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/4%7E1J%24%29B9%28T%29986KWM2L3XE8.png)  

##### 3.图片懒加载      

![图片懒加载](https://zyrs-xyz.oss-cn-beijing.aliyuncs.com/other/%7BBGR%5DG%25%600GYD3P9KQ2%7B73YQ.png)  
