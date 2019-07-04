// pages/room/zawu/zawu.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    zawu: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let zawu = utils.formatZawu(options.id)

    this.setData({
      zawu
    })
  }
})