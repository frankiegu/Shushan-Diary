// pages/jiyi/qingshi/qingshi.js

const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    qiyi: 0
  },

  onLoad: function(options) {
    var qiyi = wx.getStorageSync('qiyi')

    this.setData({
      qiyi
    })
  },

  bindDapuTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var qiyi = wx.getStorageSync('qiyi')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'qiyi', data: qiyi + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    wx.redirectTo({
      url: '/pages/event/event?event=dapu',
    })
  },

  bindDuiyiTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var qiyi = wx.getStorageSync('qiyi')
    var role = wx.getStorageSync('role')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'qiyi', data: qiyi + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 青石入室弟子
    if ((qiyi >= 10) && (role == 'rumendizi')) {
      const random = utils.roll(10)
      if (random == 1) {
        wx.setStorage({ key: 'role', data: 'qingshidizi' })
        wx.redirectTo({
          url: '/pages/event/event?event=qingshidizi',
        })
        return
      }
    }

    // 天璇迷局
    if ((qiyi >= 900) && (shujia.indexOf('tianxuanmijuxinde') == -1)) {
      shujia.push('tianxuanmijuxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=tianxuanmiju',
      })
      return
    }

    // 青石指点
    if (role == 'qingshidizi') {
      const random = utils.roll(3)
      console.log(random)
      if (random == 1) {
        wx.setStorage({ key: 'xiuwei', data: xiuwei + 10 }) // 上边的异步 setStorage 还没执行，会被覆盖
        wx.setStorage({ key: 'qiyi', data: qiyi + 10 })
        wx.redirectTo({
          url: '/pages/event/event?event=qingshizhidian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=duiyi',
    })
  }
})