// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrls: [],
    actionText: '照相/相册',
    checkboxValue: [],
    disabled: true,
    items: [
      {
        value: '私锁私用',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '车牌缺损',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '轮胎坏了',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '车锁坏了',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '违章乱停',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '密码不对',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '刹车坏了',
        checked: false,
        color: '#b9dd08'
      },
      {
        value: '其他故障',
        checked: false,
        color: '#b9dd08'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  checkboxchange: function (e) {
    let _value = e.detail.value;
    this.setData({
      checkboxValue: _value
    })
    console.log(_value.length)
    if(_value.length !== 0 && this.data.picUrls.length !== 0) {
      this.setData({
        disabled: false
      })
    }else {
      this.setData({
        disabled: true
      })
    }
  },
  addPics: function () {
    var _picUrls = [];
    wx.chooseImage({
      success: (res) => {
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          _picUrls.push(res.tempFilePaths[i]);
        }
        this.setData({
          picUrls: _picUrls,
          actionText: '+'
        })
        console.log(_picUrls.length)
        if (this.data.checkboxValue.length !== 0 && _picUrls.length !== 0) {
          this.setData({
            disabled: false
          })
        } else {
          this.setData({
            disabled: true
          })
        }
      }
    })
  },
  cancelPic: function(e) {
    this.data.picUrls.splice(e.target.dataset.index, 1);
    this.setData({
      picUrls: this.data.picUrls
    })
    if (this.data.picUrls.length === 0) {
      this.setData({
        actionText: '照相/相册'
      })
    }
  },
  numberChange: function(e) {
    this.setData({
      number: e.detail.value
    })
  },
  descChange: function (e) {
    this.setData({
      desc: ee.detail.value
    })
  },
  submit: function() {
    wx.redirectTo({
      url: '../index/index'
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