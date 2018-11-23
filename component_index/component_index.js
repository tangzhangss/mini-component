// pages/component_indax/component_indax.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgageUploadUrl:'',
    bottomLoadMoreUrl: app.globalData.imgurl+"/component/loading.png",
    imageLoaderUrl: app.globalData.imgurl + "/component/image-loader.png",
  },
  //图片上传
  to_pictureCutpage:function(){
    wx.navigateTo({
      url: './picture-cut/picture-cut',
    })
  },
  //上划刷新
  to_bottomLoadMorepage:function(){
    wx.navigateTo({
      url: './bottomLoadMore/bottomLoadMore',
    })
  },
  to_imageLoaderpage:function(){
    wx.navigateTo({
      url: './image-loader/image-loader',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     //每次显示的时候 渲染imgUrl
     this.setData({
       imgageUploadUrl: app.globalData.imgageUploadUrl,
     })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})