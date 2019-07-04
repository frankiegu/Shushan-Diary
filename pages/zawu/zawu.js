// pages/zawu/zawu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindMenpaishiwuTap: function(options) {
    var time = wx.getStorageSync('time')
    var xiuwei = wx.getStorageSync('xiuwei')
    var gongxian = wx.getStorageSync('gongxian')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'gongxian', data: gongxian + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })
  }
})