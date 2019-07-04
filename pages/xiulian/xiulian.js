// pages/xiulian/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let role = wx.getStorageSync('role')

    this.setData({
      role
    })
    
  },

  // 挥剑
  bindHuijianTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let huijian = wx.getStorageSync('huijian')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'huijian', data: huijian + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((huijian >= 100) && (shujia.indexOf('jianqixinde') == -1)) {
      shujia.push('jianqixinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=jianqi',
      })
      return
    }

    if ((huijian >= 900) && (shujia.indexOf('tianjianxinde') == -1)) {
      shujia.push('tianjianxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=tianjian',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=huijian',
    })
  },

  // 御剑术
  bindYujianshuTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let yujianshu = wx.getStorageSync('yujianshu')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'yujianshu', data: yujianshu + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((yujianshu >= 100) && (shujia.indexOf('jianqizhanxinde') == -1)) {
      shujia.push('jianqizhanxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=jianqizhan',
      })
      return
    }

    if ((yujianshu >= 300) && (shujia.indexOf('yujianfumoxinde') == -1)) {
      shujia.push('yujianfumoxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=yujianfumo',
      })
      return
    }

    if ((yujianshu >= 900) && (shujia.indexOf('jianshenxinde') == -1)) {
      shujia.push('jianshenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=jianshen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=yujianshu',
    })
  },

  // 冰咒
  bindBingzhouTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let shui = wx.getStorageSync('shui')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'shui', data: shui + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((shui >= 100) && (shujia.indexOf('xuanbingzhouxinde') == -1)) {
      shujia.push('xuanbingzhouxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=xuanbingzhou',
      })
      return
    }

    if ((shui >= 300) && (shujia.indexOf('fengxuebingtianxinde') == -1)) {
      shujia.push('fengxuebingtianxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=fengxuebingtian',
      })
      return
    }

    if ((shui >= 900) && (shujia.indexOf('xueyaoxinde') == -1)) {
      shujia.push('xueyaoxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=xueyao',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=bingzhou',
    })
  },

  // 炎咒
  bindYanzhouTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let huo = wx.getStorageSync('huo')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'huo', data: huo + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((huo >= 100) && (shujia.indexOf('chiyanshuxinde') == -1)) {
      shujia.push('chiyanshuxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=chiyanshu',
      })
      return
    }

    if ((huo >= 300) && (shujia.indexOf('lianyuhuohaixinde') == -1)) {
      shujia.push('lianyuhuohaixinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=lianyuhuohai',
      })
      return
    }

    if ((huo >= 900) && (shujia.indexOf('huoshenxinde') == -1)) {
      shujia.push('huoshenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=huoshen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=yanzhou',
    })
  },

  // 雷咒
  bindLeizhouTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let lei = wx.getStorageSync('lei')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'lei', data: lei + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((lei >= 100) && (shujia.indexOf('wuleizhouxinde') == -1)) {
      shujia.push('wuleizhouxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=wuleizhou',
      })
      return
    }

    if ((lei >= 300) && (shujia.indexOf('leidongjiutianxinde') == -1)) {
      shujia.push('leidongjiutianxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=leidongjiutian',
      })
      return
    }

    if ((lei >= 900) && (shujia.indexOf('leishenxinde') == -1)) {
      shujia.push('leishenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=leishen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=leizhou',
    })
  },

  // 风咒
  bindFengzhouTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let feng = wx.getStorageSync('feng')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'feng', data: feng + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((feng >= 100) && (shujia.indexOf('xuanfengzhouxinde') == -1)) {
      shujia.push('xuanfengzhouxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=xuanfengzhou',
      })
      return
    }

    if ((feng >= 300) && (shujia.indexOf('fengjuancanyunxinde') == -1)) {
      shujia.push('fengjuancanyunxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=fengjuancanyun',
      })
      return
    }

    if ((feng >= 900) && (shujia.indexOf('fenggshenxinde') == -1)) {
      shujia.push('fenggshenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=fenggshen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=fengzhou',
    })
  },

  // 土咒
  bindTuzhouTap() {
    let xiuwei = wx.getStorageSync('xiuwei')
    let time = wx.getStorageSync('time')
    let tu = wx.getStorageSync('tu')
    let shujia = wx.getStorageSync('shujia')

    wx.setStorage({ key: 'xiuwei', data: xiuwei + 3 })
    wx.setStorage({ key: 'time', data: time + 1 })
    wx.setStorage({ key: 'tu', data: tu + 1 })
    wx.setStorage({ key: 'todaysEventHappend', data: false })

    if ((tu >= 100) && (shujia.indexOf('feiyuanshuxinde') == -1)) {
      shujia.push('feiyuanshuxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=feiyuanshu',
      })
      return
    }

    if ((tu >= 300) && (shujia.indexOf('xingchendidongxinde') == -1)) {
      shujia.push('xingchendidongxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=xingchendidong',
      })
      return
    }

    if ((tu >= 900) && (shujia.indexOf('shanshenxinde') == -1)) {
      shujia.push('shanshenxinde')
      wx.setStorage({ key: 'shujia', data: shujia })
      wx.redirectTo({
        url: '/pages/event/event?event=shanshen',
      })
      return
    }

    wx.redirectTo({
      url: '/pages/event/event?event=tuzhou',
    })
  },
})