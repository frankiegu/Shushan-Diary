// pages/biguan/biguan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addXiuwei: 5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let addXiuwei = 5
    switch (options.role) {
      case 'zhanglao':
        addXiuwei = 5
        break
      case 'daizhangmen':
        addXiuwei = 7
        break
      case 'wusheng':
        addXiuwei = 7
        break
      case 'yisheng':
        addXiuwei = 7
        break
      case 'qisheng':
        addXiuwei = 7
        break
      case 'jiusheng':
        addXiuwei = 7
        break
      case 'shusheng':
        addXiuwei = 7
        break
      case 'bisheng':
        addXiuwei = 7
        break
      case 'yinsheng':
        addXiuwei = 7
        break
      case 'zhangmen':
        addXiuwei = 10
        break
      default:
        addXiuwei = 5
        break
    }

    this.setData({
      addXiuwei
    })
  },

  bindBiguanTap: function() {
    let that = this
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + that.data.addXiuwei })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })
    wx.redirectTo({
      url: '/pages/event/event?event=biguan' + that.data.addXiuwei,
    })
  }
})