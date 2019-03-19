// pages/component_indax/picture-cut/picture-cut.js
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
    this.picture_cut = this.selectComponent("#picture-cut");
    //console.dir(this.picture_cut);
  },
   //#############################
   //监听事件会把 参数传入对应事件参数的detail中   事件的名字不同type自定义
   //#############################
  _contentStartMove:function(e){
    //console.log(e);
    this.picture_cut.contentStartMove(e.detail);
  },
  _contentMoveing: function (e) {
    //console.log(e);
    this.picture_cut.contentMoveing(e.detail);
  },
  _dragStart: function (e){
    //console.log(e);
    this.picture_cut.dragStart(e.detail);
  },
  _dragMove: function (e){
    //console.log(e);
    this.picture_cut.dragMove(e.detail);
  },
  _scaleChange:function (e) {
    //console.log(e);
    this.picture_cut.scaleChange(e.detail);
  },
  _getImageInfo:function (e){
    //console.log(e);
    this.picture_cut.getImageInfo(e.detail);
  },
  _changefixedRatio: function (e) {
    //console.log(e);
    this.picture_cut.changefixedRatio(e.detail);
  },
  _alterScaleBtn:function(){
    //console.log();
    this.picture_cut.alterScaleBtn();
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