// pages/room/shu/shu.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shu: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let shu = utils.formatShu(options.id)

    this.setData({
      shu
    })
  },

  bindUseTap: function() {
    var shu = this.data.shu
    
    wx.setStorage({ key: 'jineng', data: shu })
    wx.switchTab({
      url: '/pages/character/character',
    })
  }
})