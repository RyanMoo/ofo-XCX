// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 126,
    latitude: 45,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = options.timer;
    wx.getLocation({
      success: (res) => {
        this.setData ({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
    wx.getSystemInfo({
      success:(res) => {
        this.setData({
          controls: [{
            id: 1,
            iconPath: '../images/location.png',
            position: {
              left: 20,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
            {
              id: 2,
              iconPath: '../images/use.png',
              position: {
                left: res.windowWidth / 2 - 40,
                top: res.windowHeight - 100,
                width: 80,
                height: 80
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: '../images/warn.png',
              position: {
                left: res.windowWidth - 80,
                top: res.windowHeight - 80,
                width: 50,
                height: 50
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: '../images/marker.png',
              position: {
                left:  res.windowWidth / 2 - 15,
                top: res.windowHeight / 2 - 45,
                width: 30,
                height: 47
              }
            },
            {
              id: 5,
              iconPath: '../images/avatar.png',
              position: {
                left:res.windowWidth - 80,
                top: res.windowHeight - 150,
                width: 50,
                height: 50
              },
              clickable: true
              
            }]
        })
      }
    })
  },

  bindtap: function (e) {
    console.log(e)
    switch (e.controlId) {
      case 1: this.moveToCenter();
              break; 
      case 2: 
        if(this.timer !== undefined) {
          wx.navigateBack({
            delta:1
          })
        }else {
          wx.scanCode({
            success: () => {
              wx.showLoading({
                title: '正在获取密码',
                success: () => {
                  console.log(1)
                }
              });
            },
            fail: () => {
              wx.showLoading({
                title: '正在获取密码',
                success: () => {
                  console.log(1)
                }
              });
              wx.request({
                url: '../../data/data.json',
                success: res => {
                  console.log(res)
                }
              })
              wx.redirectTo({
                url: '../scanresult/index?password=1234&number=12345',
                success: () => {
                  wx.showToast({
                    title: '获取密码成功'
                  })
                }
              })

            }
          })
        }
        break;
      case 3:
        wx.navigateTo({
          url: '../warn/index'
        })
        break;
      case 5:
        wx.navigateTo({
          url: '../my/index',
        })
        break;
    }
  },
  moveToCenter: function () {
    this.map = wx.createMapContext('ofo-map');
    this.map.moveToLocation();
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