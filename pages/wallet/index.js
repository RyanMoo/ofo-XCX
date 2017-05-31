// pages/wallet/index.js
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
    var myMoney = wx.getStorageSync('myMoney');
    var addMoney = wx.getStorageSync('addMoney');
    myMoney = parseInt(myMoney + addMoney);
    wx.setStorageSync('myMoney', myMoney);
    console.log(addMoney);
    console.log(myMoney)
    this.setData({
      money: myMoney
    })
  },

  recharge: function () {
    wx.navigateTo({
      url: "../recharge/index"
    })
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
    var myMoney = wx.getStorageSync('myMoney');
    var addMoney = wx.getStorageSync('addMoney');
    if(addMoney) {
      myMoney = parseInt(myMoney) + parseInt(addMoney);
      wx.setStorageSync('myMoney', myMoney);
      console.log(addMoney);
      console.log(myMoney)
      this.setData({
        money: myMoney
      })
      wx.removeStorageSync('addMoney');
    }
    
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