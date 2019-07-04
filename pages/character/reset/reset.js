// pages/character/reset/reset.js

const utils = require('../../../utils/util.js')

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

  bindResetTap: function() {
    wx.showModal({
      title: '提醒',
      content: '确定删除人物吗，删除后将清空数据，从头开始？',
      success(res) {
        if (res.confirm) {
          wx.clearStorage({
            success() {
              wx.getStorageInfo({
                success(res) {
                  console.log('删除后的数据', res.keys)
                }
              })
              utils.initAllData()
              wx.showToast({
                title: '删除成功',
                icon: 'success',
              })
              setTimeout(function() {
                wx.hideToast()
                wx.switchTab({
                  url: '/pages/index/index'
                })
              }, 2000)
            }
          })
        }
      }
    })
  }
})