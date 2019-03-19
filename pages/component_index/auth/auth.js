// pages/component_index/auth/auth.js
const web = require("../../../utils/web.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    //获得dialog组件   id选择器  标签选择器不行 类选择器没尝试过
    this.auth_modal = this.selectComponent("#auth_modal");
  },

  authCallback:function(e){
    console.log("授权完成的回调", e.detail);
    if (e.detail.userInfo == undefined){
      web.showToastWithNoneIcon("您拒绝了授权！");
    }else{
      web.showToastWithSuccess("授权成功！");
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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