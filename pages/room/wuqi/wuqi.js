// pages/room/wuqi/wuqi.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wuqi: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let wuqi = utils.formatWuqi(options.id)

    this.setData({
      wuqi
    })
  },

  bindUseTap: function () {
    var wuqi = this.data.wuqi

    wx.setStorage({ key: 'wuqi', data: wuqi })
    wx.switchTab({
      url: '/pages/character/character',
    })
  }
})