// pages/character/character.js
const utils = require('../../utils/util.js')

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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let time = wx.getStorageSync('time')
    let role = wx.getStorageSync('role')
    let wuqi = wx.getStorageSync('wuqi')
    let jineng = wx.getStorageSync('jineng')
    let xiuwei = wx.getStorageSync('xiuwei')
    let gongxian = wx.getStorageSync('gongxian')
    let yishu = wx.getStorageSync('yishu')
    let qiyi = wx.getStorageSync('qiyi')
    let jiuliang = wx.getStorageSync('jiuliang')
    let xueshi = wx.getStorageSync('xueshi')
    let shufa = wx.getStorageSync('shufa')
    let yinlv = wx.getStorageSync('yinlv')
    let duanzao = wx.getStorageSync('duanzao')
    let huo = wx.getStorageSync('huo')
    let shui = wx.getStorageSync('shui')
    let lei = wx.getStorageSync('lei')
    let feng = wx.getStorageSync('feng')
    let tu = wx.getStorageSync('tu')
    let zhanli = 0

    let date = utils.formatTime(time)
    let roleText = utils.formatRole(role)

    if (jineng && wuqi) {
      if (wuqi.name == '水灵珠' && (jineng.name == '冰咒' || jineng.name == '玄冰咒' || jineng.name == '风雪冰天' || jineng.name == '雪妖')) {
        zhanli = xiuwei * jineng.value * 2 + wuqi.value
      } else if (wuqi.name == '火灵珠' && (jineng.name == '炎咒' || jineng.name == '炽炎术' || jineng.name == '炼狱火海' || jineng.name == '火神')) {
        zhanli = xiuwei * jineng.value * 2 + wuqi.value
      } else if (wuqi.name == '雷灵珠' && (jineng.name == '雷咒' || jineng.name == '五雷咒' || jineng.name == '雷动九天' || jineng.name == '雷神')) {
        zhanli = xiuwei * jineng.value * 2 + wuqi.value
      } else if (wuqi.name == '风灵珠' && (jineng.name == '风咒' || jineng.name == '旋风咒' || jineng.name == '风卷残云' || jineng.name == '风神')) {
        zhanli = xiuwei * jineng.value * 2 + wuqi.value
      } else if (wuqi.name == '土灵珠' && (jineng.name == '土咒' || jineng.name == '飞岩术' || jineng.name == '星沉地动' || jineng.name == '山神')) {
        zhanli = xiuwei * jineng.value * 2 + wuqi.value
      } else {
        zhanli = xiuwei * jineng.value + wuqi.value
      }
    } else {
      zhanli = xiuwei
    }

    this.setData({
      date,
      roleText,
      wuqi,
      jineng,
      zhanli,
      xiuwei,
      gongxian,
      yishu,
      qiyi,
      jiuliang,
      xueshi,
      shufa,
      yinlv,
      duanzao,
      huo,
      shui,
      lei,
      feng,
      tu
    })
    console.log('人物', this.data)
  },

})