// pages/jiyi/caogu/caogu.js

const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yishu: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let yishu = wx.getStorageSync('yishu')

    this.setData({
      yishu
    })
  },

  bindCaiyaoTap: function (options) {
    let time = wx.getStorageSync('time')
    let xiuwei = wx.getStorageSync('xiuwei')
    let yishu = wx.getStorageSync('yishu')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'yishu', data: yishu + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    wx.redirectTo({
      url: '/pages/event/event?event=caiyao',
    })
  },

  bindLiandanTap: function (options) {
    let time = wx.getStorageSync('time')
    let xiuwei = wx.getStorageSync('xiuwei')
    let yishu = wx.getStorageSync('yishu')
    let role = wx.getStorageSync('role')
    let yaogui = wx.getStorageSync('yaogui')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'yishu', data: yishu + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 草谷入室弟子
    if ((yishu >= 10) && (role == 'rumendizi')) {
      const random = utils.roll(10)
      if (random == 1) {
        wx.setStorage({ key: 'role', data: 'caogudizi' })
        wx.redirectTo({
          url: '/pages/event/event?event=caogudizi',
        })
        return
      }
    }

    // 赤雪流珠丹
    if ((yishu >= 900) && (yaogui.indexOf('chixueliuzhudan')) == -1) {
      yaogui.push('chixueliuzhudan')
      wx.setStorage({ key: 'yaogui', data: yaogui })
      wx.redirectTo({
        url: '/pages/event/event?event=lianchengchixueliuzhudan',
      })
      return
    }

    // 草谷指点
    if (role == 'caogudizi') {
      const random = utils.roll(3)
      console.log(random)
      if (random == 1) {
        wx.setStorage({ key: 'xiuwei', data: xiuwei + 10 }) // 上边的异步 setStorage 还没执行，会被覆盖
        wx.setStorage({ key: 'yishu', data: yishu + 10 })
        wx.redirectTo({
          url: '/pages/event/event?event=caoguzhidian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=liandan',
    })
  }
})