// pages/room/yao/yao.js
const utils = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yao: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let yao = utils.formatYao(options.id)

    this.setData({
      yao
    })
  }
})