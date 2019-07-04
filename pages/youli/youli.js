// pages/youli/youli.js
const app = getApp()
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

  bindYouliTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let wuqijia = wx.getStorageSync('wuqijia')
    let shui = wx.getStorageSync('shui')
    let huo = wx.getStorageSync('huo')
    let lei = wx.getStorageSync('lei')
    let feng = wx.getStorageSync('feng')
    let tu = wx.getStorageSync('tu')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 1 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    // 水灵珠
    if (shui >= 10) {
      let random = utils.roll(72)
      if (random == 1 && (wuqijia.indexOf('shuilingzhu') == -1)) {
        wuqijia.push('shuilingzhu')
        wx.setStorage({ key: 'wuqijia', data: wuqijia })
        wx.redirectTo({
          url: '/pages/event/event?event=shuilingzhu',
        })
        return
      }
    }

    // 火灵珠
    if (huo >= 10) {
      let random = utils.roll(72)
      if (random == 1 && (wuqijia.indexOf('huolingzhu') == -1)) {
        wuqijia.push('huolingzhu')
        wx.setStorage({ key: 'wuqijia', data: wuqijia })
        wx.redirectTo({
          url: '/pages/event/event?event=huolingzhu',
        })
        return
      }
    }

    // 雷灵珠
    if (lei >= 10) {
      let random = utils.roll(72)
      if (random == 1 && (wuqijia.indexOf('leilingzhu') == -1)) {
        wuqijia.push('leilingzhu')
        wx.setStorage({ key: 'wuqijia', data: wuqijia })
        wx.redirectTo({
          url: '/pages/event/event?event=leilingzhu',
        })
        return
      }
    }

    // 风灵珠
    if (feng >= 10) {
      let random = utils.roll(72)
      if (random == 1 && (wuqijia.indexOf('fenglingzhu') == -1)) {
        wuqijia.push('fenglingzhu')
        wx.setStorage({ key: 'wuqijia', data: wuqijia })
        wx.redirectTo({
          url: '/pages/event/event?event=fenglingzhu',
        })
        return
      }
    }

    // 土灵珠
    if (tu >= 10) {
      let random = utils.roll(72)
      if (random == 1 && (wuqijia.indexOf('tulingzhu') == -1)) {
        wuqijia.push('tulingzhu')
        wx.setStorage({ key: 'wuqijia', data: wuqijia })
        wx.redirectTo({
          url: '/pages/event/event?event=tulingzhu',
        })
        return
      }
    }

    // 三国名剑
    if (time >= 1) {
      let random = utils.roll(100)
      if (random == 1) {
        let goods = ['zhenshanjian', 'feijingjian', 'liucaijian', 'huatingjian', 'baihongjian', 'zidianjian', 'bixiejian', 'liuxingjian', 'qingmingjian', 'bailijian', 'yitianjian', 'qinggangjian']
        let good = utils.randomSelect(goods, wuqijia)
        if (good != 'allHave') {
          wuqijia.push(good)
          wx.setStorage({ key: 'wuqijia', data: wuqijia })
          wx.redirectTo({
            url: '/pages/event/event?event=' + good,
          })
          return
        }
      }
    }

    // 越王八剑、商天子三剑
    if (time >= 1) {
      let random = utils.roll(300)
      if (random == 1) {
        let goods = ['yanrijian', 'duanshuijian', 'zhuanpojian', 'xuanjianjian', 'jingnijian', 'miehunjian', 'quexiejian', 'zhengangjian', 'xiaolianjian', 'chengyingjian', 'hanguangjian']
        let good = utils.randomSelect(goods, wuqijia)
        if (good != 'allHave') {
          wuqijia.push(good)
          wx.setStorage({ key: 'wuqijia', data: wuqijia })
          wx.redirectTo({
            url: '/pages/event/event?event=' + good,
          })
          return
        }
      }
    }

    // 欧冶子、干将
    if (time >= 1) {
      let random = utils.roll(1000)
      if (random == 1) {
        let goods = ['ganjiangjian', 'moyejian', 'longyuanjian', 'taiejian', 'gongbujian', 'juquejian', 'yuchangjian', 'shengxiejian', 'chunjunjian', 'zhanlujian']
        let good = utils.randomSelect(goods, wuqijia)
        if (good != 'allHave') {
          wuqijia.push(good)
          if (good == 'ganjiangjian' && (wuqijia.indexOf('moyejian') == -1)) {
            wuqijia.push('moyejian')
          }
          if (good == 'moyejian' && (wuqijia.indexOf('ganjiangjian') == -1)) {
            wuqijia.push('ganjiangjian')
          }
          wx.setStorage({ key: 'wuqijia', data: wuqijia })
          wx.redirectTo({
            url: '/pages/event/event?event=' + good,
          })
          return
        }
      }
    }

    // 曳影剑
    if (time >= 1) {
      let random = utils.roll(3000000)
      if (random == 1 && (wuqijia.indexOf('yeyingjian') == -1)) {
        wuqijia.push('yeyingjian')
        wx.setStorage({ key: 'wuqijia', data: wuqijia })
        wx.redirectTo({
          url: '/pages/event/event?event=yeyingjian',
        })
        return
      }
    }

    // 轩辕剑
    if (time >= 1) {
      let random = utils.roll(10000000)
      if (random == 1 && (wuqijia.indexOf('xuanyuanjian') == -1)) {
        wuqijia.push('xuanyuanjian')
        wx.setStorage({ key: 'wuqijia', data: wuqijia })
        wx.redirectTo({
          url: '/pages/event/event?event=xuanyuanjian',
        })
        return
      }
    }

    wx.redirectTo({
      url: '/pages/event/event?event=youli',
    })
  }
})