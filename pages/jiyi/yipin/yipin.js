// pages/jiyi/yipin/yipin.js

const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jiuliang: 0
  },

  onLoad: function(options) {
    var jiuliang = wx.getStorageSync('jiuliang')

    this.setData({
      jiuliang
    })
  },

  bindHejiuTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var jiuliang = wx.getStorageSync('jiuliang')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'jiuliang', data: jiuliang + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    wx.redirectTo({
      url: '/pages/event/event?event=hejiu',
    })
  },

  bindHuaquanTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var jiuliang = wx.getStorageSync('jiuliang')
    var role = wx.getStorageSync('role')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'jiuliang', data: jiuliang + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 一贫入室弟子
    if ((jiuliang >= 10) && (role == 'rumendizi')) {
      const random = utils.roll(100) // 一贫和紫殷是100
      if (random == 1) {
        wx.setStorage({ key: 'role', data: 'yipindizi' })
        wx.redirectTo({
          url: '/pages/event/event?event=yipindizi',
        })
        return
      }
    }

    // 醉仙望月步
    if ((jiuliang >= 300) && (shujia.indexOf('zuixianwangyuebuxinde') == -1)) {
      shujia.push('zuixianwangyuebuxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=zuixianwangyuebu',
      })
      return
    }

    // 酒神
    if ((jiuliang >= 900) && (shujia.indexOf('jiushenxinde') == -1)) {
      shujia.push('jiushenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=jiushen',
      })
      return
    }

    // 万剑诀
    if ((jiuliang >= 1500) && (role == 'yipindizi' || role == 'jiusheng') && (shujia.indexOf('wanjianjuexinde') == -1)) {
      shujia.push('wanjianjuexinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=wanjianjue',
      })
      return
    }

    // 一贫指点
    if (role == 'yipindizi' || role == 'jiusheng') {
      const random = utils.roll(3)
      console.log(random)
      if (random == 1) {
        wx.setStorage({ key: 'xiuwei', data: xiuwei + 10 }) // 上边的异步 setStorage 还没执行，会被覆盖
        wx.setStorage({ key: 'jiuliang', data: jiuliang + 10 })
        wx.redirectTo({
          url: '/pages/event/event?event=yipinzhidian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=huaquan',
    })
  }
})