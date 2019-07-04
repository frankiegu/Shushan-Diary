// pages/room/shujia/shujia.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shujia: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let shujia = wx.getStorageSync('shujia')

    for (var i = 0; i < shujia.length; i++) {
      shujia[i] = utils.formatShu(shujia[i])
    }
    
    this.setData({
      shujia
    })
  },
})