// pages/jiyi/tiebi/tiebi.js

const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shufa: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shufa = wx.getStorageSync('shufa')

    this.setData({
      shufa
    })
  },

  bindLinmoTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var shufa = wx.getStorageSync('shufa')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'shufa', data: shufa + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    wx.redirectTo({
      url: '/pages/event/event?event=linmo',
    })
  },

  bindXieziTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var shufa = wx.getStorageSync('shufa')
    var role = wx.getStorageSync('role')
    let shujia = wx.getStorageSync('shujia')
    let wuqijia = wx.getStorageSync('wuqijia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'shufa', data: shufa + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 铁笔入室弟子
    if ((shufa >= 10) && (role == 'rumendizi')) {
      const random = utils.roll(10)
      if (random == 1) {
        wx.setStorage({ key: 'role', data: 'tiebidizi' })
        wx.redirectTo({
          url: '/pages/event/event?event=tiebidizi',
        })
        return
      }
    }

    // 玄铁重剑
    if ((shufa >= 300) && (wuqijia.indexOf('xuantiezhongjian') == -1)) {
      wuqijia.push('xuantiezhongjian')
      wx.setStorage({ key: 'wuqijia', data: wuqijia })
      wx.redirectTo({
        url: '/pages/event/event?event=xuantiezhongjian',
      })
      return
    }

    // 开阳幻境
    if ((shufa >= 900) && (shujia.indexOf('kaiyanghuanjingxinde') == -1)) {
      shujia.push('kaiyanghuanjingxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=kaiyanghuanjing',
      })
      return
    }

    // 铁笔指点
    if (role == 'tiebidizi') {
      const random = utils.roll(3)
      console.log(random)
      if (random == 1) {
        wx.setStorage({ key: 'xiuwei', data: xiuwei + 10 }) // 上边的异步 setStorage 还没执行，会被覆盖
        wx.setStorage({ key: 'shufa', data: shufa + 10 })
        wx.redirectTo({
          url: '/pages/event/event?event=tiebizhidian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=xiezi',
    })
  }
})