//app.js

const utils = require('utils/util.js')
const updateManager = wx.getUpdateManager()

App({
  onLaunch: function () {
    wx.getStorageInfo({
      success(res) {
        console.log('载入程序', res.keys)
      }
    })
    
    // 第一次进入游戏数据初始化
    var firstTimePlayGame = wx.getStorageSync('firstTimePlayGame') || 'true'

    if (firstTimePlayGame == 'true') {
      utils.initAllData()

      wx.redirectTo({
        url: '/pages/event/event?event=kaishi',
      })
    }

    // 版本检测
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
  },
  globalData: {
  }
})