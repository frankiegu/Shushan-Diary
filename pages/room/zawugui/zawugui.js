// pages/room/zawugui/zawugui.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    zawugui: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let zawugui = wx.getStorageSync('zawugui')

    for (var i = 0; i < zawugui.length; i++) {
      zawugui[i] = utils.formatZawu(zawugui[i])
    }

    this.setData({
      zawugui
    })
  },
})