// pages/room/wuqijia/wuqijia.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wuqijia: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let wuqijia = wx.getStorageSync('wuqijia')

    for (var i = 0; i < wuqijia.length; i++) {
      wuqijia[i] = utils.formatWuqi(wuqijia[i])
    }

    this.setData({
      wuqijia
    })
  },
})