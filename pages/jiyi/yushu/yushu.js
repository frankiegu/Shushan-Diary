// pages/jiyi/yushu/yushu.js

const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    xueshi: 0
  },

  onLoad: function(options) {
    var xueshi = wx.getStorageSync('xueshi')

    this.setData({
      xueshi
    })
  },

  bindZhenglidianjiTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var xueshi = wx.getStorageSync('xueshi')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'xueshi', data: xueshi + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    wx.redirectTo({
      url: '/pages/event/event?event=zhenglidianji',
    })
  },

  bindCanyuedianjiTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var xueshi = wx.getStorageSync('xueshi')
    var role = wx.getStorageSync('role')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'xueshi', data: xueshi + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 玉书入室弟子
    if ((xueshi >= 10) && (role == 'rumendizi')) {
      const random = utils.roll(10)
      if (random == 1) {
        wx.setStorage({ key: 'role', data: 'yushudizi' })
        wx.redirectTo({
          url: '/pages/event/event?event=yushudizi',
        })
        return
      }
    }

    // 中级法术
    if ((xueshi >= 500) && (shujia.indexOf('xuanbingzhouxinde') == -1 || shujia.indexOf('chiyanshuxinde') == -1 || shujia.indexOf('wuleizhouxinde') == -1 || shujia.indexOf('xuanfengzhouxinde') == -1 || shujia.indexOf('feiyuanshuxinde') == -1)) {
      let zhongjifashu = ['xuanbingzhouxinde', 'chiyanshuxinde', 'wuleizhouxinde', 'xuanfengzhouxinde', 'feiyuanshuxinde']
      for (var i = 0; i < zhongjifashu.length; i++) {
        if (shujia.indexOf(zhongjifashu[i]) == -1) {
          shujia.push(zhongjifashu[i])
        }
      }

      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=xueshi5000',
      })
      return
    }

    // 天权奇阵
    if ((xueshi >= 900) && (shujia.indexOf('tianquanqizhenxinde') == -1)) {
      shujia.push('tianquanqizhenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=tianquanqizhen',
      })
      return
    }

    // 高级法术
    if ((xueshi >= 900) && (shujia.indexOf('fengxuebingtianxinde') == -1 || shujia.indexOf('lianyuhuohaixinde') == -1 || shujia.indexOf('leidongjiutianxinde') == -1 || shujia.indexOf('fengjuancanyunxinde') == -1 || shujia.indexOf('xingchendidongxinde') == -1)) {
      let gaojifashu = ['fengxuebingtianxinde', 'lianyuhuohaixinde', 'leidongjiutianxinde', 'fengjuancanyunxinde', 'xingchendidongxinde']
      for (var i = 0; i < gaojifashu.length; i++) {
        if (shujia.indexOf(gaojifashu[i]) == -1) {
          shujia.push(gaojifashu[i])
        }
      }

      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=xueshi9000',
      })
      return
    }

    // 玉书指点
    if (role == 'yushudizi') {
      const random = utils.roll(3)
      
      if (random == 1) {
        wx.setStorage({ key: 'xiuwei', data: xiuwei + 10 }) // 上边的异步 setStorage 还没执行，会被覆盖
        wx.setStorage({ key: 'xueshi', data: xueshi + 10 })
        wx.redirectTo({
          url: '/pages/event/event?event=yushuzhidian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=canyuedianji',
    })
  }
})