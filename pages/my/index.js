// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPic: '',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _myPic = wx.getStorageSync('myPic');
    if(_myPic === '') {
      this.setData({
        myNickName: '未登录',
        login: '登陆',
        btnType: 'primary',
        myPic: ''
      })
    }else {
      this.setData({
        myNickName: wx.getStorageSync('myNickName'),
        login: '退出登录',
        btnType: 'warn',
        myPic: wx.getStorageSync('myPic')
      })
    }
  },

  login: function () {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: res => {
            wx.setStorageSync('myPic', res.userInfo.avatarUrl);
            wx.setStorageSync('myNickName', res.userInfo.nickName);  
            if(!(wx.getStorageSync('myMoney'))) {
              wx.setStorageSync('myMoney', 0);
            }
            if(this.data.myPic === '') {
              this.setData({
                myPic: res.userInfo.avatarUrl,
                myNickName: res.userInfo.nickName,
                btnType: 'warn',
                login: '退出登陆'
              })
            }else {
              wx.removeStorageSync('myPic');
              wx.removeStorageSync('myNickName');
              this.setData({
                myNickName: '未登录',
                login: '登陆',
                btnType: 'primary',
                myPic: ''
              })
            }
          }
        })
      }
    })
  },

  movetoWallet: function () {
    wx.navigateTo({
      url: '../wallet/index',
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