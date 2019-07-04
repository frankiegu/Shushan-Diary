// pages/jiyi/lingyin/lingyin.js

const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yinlv: 0
  },

  onLoad: function () {
    var yinlv = wx.getStorageSync('yinlv')

    this.setData({
      yinlv
    })
  },

  bindZhifaTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var yinlv = wx.getStorageSync('yinlv')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'yinlv', data: yinlv + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    wx.redirectTo({
      url: '/pages/event/event?event=zhifa',
    })
  },

  bindZouyueTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var yinlv = wx.getStorageSync('yinlv')
    var role = wx.getStorageSync('role')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'yinlv', data: yinlv + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 凌音入室弟子
    if ((yinlv >= 10) && (role == 'rumendizi')) {
      const random = utils.roll(10)
      if (random == 1) {
        wx.setStorage({ key: 'role', data: 'lingyindizi' })
        wx.redirectTo({
          url: '/pages/event/event?event=lingyindizi',
        })
        return
      }
    }

    // 宁音曲
    if ((yinlv >= 300) && (shujia.indexOf('ningyinquxinde') == -1)) {
      shujia.push('ningyinquxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=ningyinqu',
      })
      return
    }

    // 穹光破阵曲
    if ((yinlv >= 300) && (shujia.indexOf('qiongguangpozhenquxinde') == -1)) {
      shujia.push('qiongguangpozhenquxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=qiongguangpozhenqu',
      })
      return
    }

    // 凌音指点
    if (role == 'lingyindizi') {
      const random = utils.roll(3)
      console.log(random)
      if (random == 1) {
        wx.setStorage({ key: 'xiuwei', data: xiuwei + 10 }) // 上边的异步 setStorage 还没执行，会被覆盖
        wx.setStorage({ key: 'yinlv', data: yinlv + 10 })
        wx.redirectTo({
          url: '/pages/event/event?event=lingyinzhidian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=zouyue',
    })
  }
})