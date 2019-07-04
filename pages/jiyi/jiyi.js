// pages/jiyi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    npc: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let npc = wx.getStorageSync('npc')

    this.setData({
      npc
    })
  },
})