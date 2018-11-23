# mini-component
微信小程序组件集合

#### 目录结构

* component                 
               [^组件总目录]
   * 目录一                 （组件一）
   * 目录二                 （组件二）
* component_index           (使用组件demo主页面)
   * 目录一                  (组件一demo)
   * 目录二                  (组件二demo)
   * 文件                    (小程序页面 通过这个页面汇集组件demo的调用)  

#### 如何使用 将demo弄进微信小程序
 
  1.直接创建clone此项目
  2.创建小程序
  3.将项目放在page目录下，app.json中 添加‘pages’ 并将  component_index/component_index 设置为主页
  ###### 注意 
       图片上传 需要用到  app.js 中的 imgageUploadUrl属性  所以需要在app.js中添加此属性
  
  
  
