// pages/scanresult/index.js
var myData = require('../../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 9,
    showData: myData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      password: this.data.showData.password
    })
    let t = 9;
    this.timer = setInterval(()=> {
      t--;
      this.setData({
        time: t
      })
      if(t === 0) {
        wx.redirectTo({
          url: '../billing/index?password=' + options.password + '&number' + options.number,
        })
      }
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})