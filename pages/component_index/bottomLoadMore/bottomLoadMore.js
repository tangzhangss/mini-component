
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cards: [
     
    ],

    cards_test:[
      {
        "id": 1,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/1.jpg",
        "name": "唐一",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 250,
        "good": 250,
        "watch": 1000,
        "distance": 1.5
      },
      {
        "id": 2,
        "logo": app.globalData.imgurl +"/component/bottomLoadMore/2.jpg",
        "name": "唐二",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 50,
        "good": 100,
        "watch": 1000,
        "distance": 1.5
      },
      {
        "id": 3,
        "logo": app.globalData.imgurl +"/component/bottomLoadMore/3.jpg",
        "name": "唐三",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 2,
        "good": 2,
        "watch": 200,
        "distance": 1.5
      },
      {
        "id": 4,
        "logo": app.globalData.imgurl +"/component/bottomLoadMore/4.jpg",
        "name": "唐四",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 23,
        "good": 33,
        "watch": 1000,
        "distance": 1.5
      },
      {
        "id": 5,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/5.jpg",
        "name": "唐五",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 22,
        "good": 35,
        "watch": 56,
        "distance": 1.5
      },
      {
        "id": 6,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/6.jpg",
        "name": "唐六",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 236,
        "good": 478,
        "watch": 63231,
        "distance": 1.5
      },
      {
        "id": 7,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/7.jpg",
        "name": "唐七",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 2323,
        "good": 1212,
        "watch": 100012,
        "distance": 1.5
      },
      {
        "id": 8,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/8.jpg",
        "name": "唐八",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 250,
        "good": 250,
        "watch": 1000,
        "distance": 1.5
      },
      {
        "id": 9,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/1.jpg",
        "name": "唐九",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 50,
        "good": 100,
        "watch": 1000,
        "distance": 1.5
      },
      {
        "id": 10,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/2.jpg",
        "name": "唐十",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 2,
        "good": 2,
        "watch": 200,
        "distance": 1.5
      },
      {
        "id": 11,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/3.jpg",
        "name": "唐十一",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 23,
        "good": 33,
        "watch": 1000,
        "distance": 1.5
      },
      {
        "id": 12,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/4.jpg",
        "name": "唐十二",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 22,
        "good": 35,
        "watch": 56,
        "distance": 1.5
      },
      {
        "id": 13,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/5.jpg",
        "name": "唐十三",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 236,
        "good": 478,
        "watch": 63231,
        "distance": 1.5
      },
      {
        "id": 14,
        "logo": app.globalData.imgurl+"/component/bottomLoadMore/6.jpg",
        "name": "唐十四",
        "post": "工程师",
        "company": "四川辰天科技有限公司",
        "notice": 2323,
        "good": 1212,
        "watch": 100012,
        "distance": 1.5
      }
    ],

    loading: 'false',
    haveMore: 'true',

    logo: app.globalData.imgurl + "/component/bottomLoadMore/logo.jpg",
    msg: app.globalData.imgurl + "/component/bottomLoadMore/msg.png",
    narrowbot: app.globalData.imgurl + "/component/bottomLoadMore/narrowbot.png",
    getcard: app.globalData.imgurl + "/component/bottomLoadMore/getcard.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    this.setData({
      loading: 'true'
    })
 
    setTimeout(()=>{
      var temp = this.data.cards_test.slice(0, 4);

      let cards = this.data.cards.concat(temp);
      console.log(cards);
      var haveMore = 'false';

      if (cards.lenght < this.data.cards_test.length) {
        haveMore = 'true';
      }

      that.setData({
        cards: cards,
        loading: 'false'
      })
    },1000)

    
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
     var that = this;
      
     if(this.data.haveMore == 'false'){
       return;
     }
     
     this.setData({
       loading: 'true'
     })

     setTimeout(function(){
       let length = that.data.cards.length;
      
       let temp = that.data.cards_test.slice(length, length+4);

       let cards = that.data.cards.concat(temp);

       if (cards.length >= that.data.cards_test.length) {
         that.setData({
           haveMore: 'false'
         })
       }

       that.setData({
         cards: cards,
         loading:'false'
       })

     },2000)
     
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})