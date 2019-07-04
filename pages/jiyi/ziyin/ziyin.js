// pages/jiyi/ziyin/ziyin.js

const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    duanzao: 0
  },

  onLoad: function(options) {
    var duanzao = wx.getStorageSync('duanzao')

    this.setData({
      duanzao
    })
  },

  bindWakuangTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var duanzao = wx.getStorageSync('duanzao')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'duanzao', data: duanzao + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    wx.redirectTo({
      url: '/pages/event/event?event=wakuang',
    })
  },

  bindZhujianTap: function (options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var duanzao = wx.getStorageSync('duanzao')
    var role = wx.getStorageSync('role')
    let shujia = wx.getStorageSync('shujia')
    let wuqijia = wx.getStorageSync('wuqijia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'duanzao', data: duanzao + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 紫殷入室弟子
    if ((duanzao >= 10) && (role == 'rumendizi')) {
      const random = utils.roll(100) // 一贫和紫殷是100
      if (random == 1) {
        wx.setStorage({ key: 'role', data: 'ziyindizi' })
        wx.redirectTo({
          url: '/pages/event/event?event=ziyindizi',
        })
        return
      }
    }

    // 铁剑
    if ((duanzao >= 10) && (wuqijia.indexOf('tiejian') == -1)) {
      wuqijia.push('tiejian')
      wx.setStorage({ key: 'wuqijia', data: wuqijia })
      wx.redirectTo({
        url: '/pages/event/event?event=tiejian',
      })
      return
    }

    // 青铜剑
    if ((duanzao >= 30) && (wuqijia.indexOf('qingtongjian') == -1)) {
      wuqijia.push('qingtongjian')
      wx.setStorage({ key: 'wuqijia', data: wuqijia })
      wx.redirectTo({
        url: '/pages/event/event?event=qingtongjian',
      })
      return
    }

    // 精钢剑
    if ((duanzao >= 50) && (wuqijia.indexOf('jinggangjian') == -1)) {
      wuqijia.push('jinggangjian')
      wx.setStorage({ key: 'wuqijia', data: wuqijia })
      wx.redirectTo({
        url: '/pages/event/event?event=jinggangjian',
      })
      return
    }

    // 玄铁剑
    if ((duanzao >= 100) && (wuqijia.indexOf('xuantiejian') == -1)) {
      wuqijia.push('xuantiejian')
      wx.setStorage({ key: 'wuqijia', data: wuqijia })
      wx.redirectTo({
        url: '/pages/event/event?event=xuantiejian',
      })
      return
    }

    // 寒铁剑
    if ((duanzao >= 300) && (wuqijia.indexOf('hantiejian') == -1)) {
      wuqijia.push('hantiejian')
      wx.setStorage({ key: 'wuqijia', data: wuqijia })
      wx.redirectTo({
        url: '/pages/event/event?event=hantiejian',
      })
      return
    }

    // 夏螟剑
    if ((duanzao >= 900) && (wuqijia.indexOf('xiamingjian') == -1)) {
      wuqijia.push('xiamingjian')
      wx.setStorage({ key: 'wuqijia', data: wuqijia })
      wx.redirectTo({
        url: '/pages/event/event?event=xiamingjian',
      })
      return
    }

    // 千方残光剑
    if ((duanzao >= 1500) && (role == 'ziyindizi' || role == 'zhujianzhanglao') && (shujia.indexOf('qianfangcanguangjianxinde') == -1)) {
      shujia.push('qianfangcanguangjianxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=qianfangcanguangjian',
      })
      return
    }

    // 紫殷指点
    if (role == 'ziyindizi' || role == 'zhujianzhanglao') {
      const random = utils.roll(3)
      console.log(random)
      if (random == 1) {
        wx.setStorage({ key: 'xiuwei', data: xiuwei + 10 }) // 上边的异步 setStorage 还没执行，会被覆盖
        wx.setStorage({ key: 'duanzao', data: duanzao + 10 })
        wx.redirectTo({
          url: '/pages/event/event?event=ziyinzhidian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=zhujian',
    })
  }
})