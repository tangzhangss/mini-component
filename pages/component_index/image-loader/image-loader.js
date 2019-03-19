// pages/component_index/image-loader/image-loader.js
const app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        app.globalData.imgurl+"/component/image-loader/0.jpg",
        app.globalData.imgurl + "/component/image-loader/1.jpg",
        app.globalData.imgurl + "/component/image-loader/2.jpg",
        app.globalData.imgurl + "/component/image-loader/3.jpg",
        app.globalData.imgurl + "/component/image-loader/4.jpg",
        app.globalData.imgurl + "/component/image-loader/5.jpg",
        app.globalData.imgurl + "/component/image-loader/6.jpg",
        app.globalData.imgurl + "/component/image-loader/7.jpg",
        app.globalData.imgurl + "/component/image-loader/8.jpg",
        app.globalData.imgurl + "/component/image-loader/9.jpg",
        app.globalData.imgurl + "/component/image-loader/10.jpg",
        app.globalData.imgurl + "/component/image-loader/11.jpg"
      ]
  },
  preImage: function (e) {
    let index = e.currentTarget.dataset.index;
    wx.previewImage({
      urls: this.data.list,
      current: this.data.list[index]
    })
  },
})