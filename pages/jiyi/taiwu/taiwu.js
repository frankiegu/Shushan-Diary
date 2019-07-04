// pages/jiyi/taiwu/taiwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let role = wx.getStorageSync('role')

    this.setData({
      role
    })
  },

  bindChixingyunTap() {
    var xiuwei = wx.getStorageSync('xiuwei')
    var time = wx.getStorageSync('time')
    let huo = wx.getStorageSync('huo')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 4 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'huo', data: huo + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((huo >= 100) && (shujia.indexOf('lianyuhuohaixinde') == -1)) {
      shujia.push('lianyuhuohaixinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=lianyuhuohai',
      })
      return
    }

    if ((huo >= 900) && (shujia.indexOf('huoshenxinde') == -1)) {
      shujia.push('huoshenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=huoshen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=chixingyun',
    })
  },

  bindYefengwuTap() {
    var xiuwei = wx.getStorageSync('xiuwei')
    var time = wx.getStorageSync('time')
    let feng = wx.getStorageSync('feng')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 4 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'feng', data: feng + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((feng >= 100) && (shujia.indexOf('fengjuancanyunxinde') == -1)) {
      shujia.push('fengjuancanyunxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=fengjuancanyun',
      })
      return
    }

    if ((feng >= 900) && (shujia.indexOf('fenggshenxinde') == -1)) {
      shujia.push('fenggshenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=fenggshen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=yefengwu',
    })
  },

  bindJiaoyanluTap() {
    var xiuwei = wx.getStorageSync('xiuwei')
    var time = wx.getStorageSync('time')
    let tu = wx.getStorageSync('tu')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 4 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'tu', data: tu + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((tu >= 100) && (shujia.indexOf('xingchendidongxinde') == -1)) {
      shujia.push('xingchendidongxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=xingchendidong',
      })
      return
    }

    if ((tu >= 900) && (shujia.indexOf('shanshenxinde') == -1)) {
      shujia.push('shanshenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=shanshen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=jiaoyanlu',
    })
  },
})