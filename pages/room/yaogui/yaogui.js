// pages/room/yaogui/yaogui.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yaogui: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let yaogui = wx.getStorageSync('yaogui')

    for (var i = 0; i < yaogui.length; i++) {
      yaogui[i] = utils.formatYao(yaogui[i])
    }

    this.setData({
      yaogui
    })
  },
})