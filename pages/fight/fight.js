// pages/fight/fight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    text: '',
    enemy: ''
  },

  _xiuwei: 0,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    setTimeout(function(){
      that.setData({
        loading: false
      })
    }, 2000)

    that._xiuwei = wx.getStorageSync('xiuwei')
    let jineng = wx.getStorageSync('jineng')
    let wuqi = wx.getStorageSync('wuqi')
    let zhanli = 0
    let xiuwei = that._xiuwei

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
      console.log('战力，修为，技能，武器', zhanli, xiuwei, jineng, wuqi)
    } else {
      zhanli = xiuwei
      console.log('战力，修为', zhanli,xiuwei)
    }

    let text = ''
    let enemy = ''
    let duifangzhanli = 0
    let wayToWin = []
    let jinengToWin = '用' + jineng.name + '击败对方'

    switch (options.enemy) {
      // 剧情
      case 'qiecuodizi':
        text = `与同门弟子切磋
        对方：蜀山弟子
        战力：5`
        duifangzhanli = 5
        break
      case 'dajiadizi':
        text = `有人前来滋事
        对手：蜀山滋事弟子
        战力：30`
        duifangzhanli = 30
        break
      // 随机妖怪
      case 'fengxieshou':
        text = `有妖怪袭击蜀山
        对手：风邪兽
        战力：108`
        duifangzhanli = 108
        break
      case 'fengxieshou2':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：216`
        duifangzhanli = 216
        break
      case 'fengxieshou3':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：324`
        duifangzhanli = 324
        break
      case 'fengxieshou4':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：432`
        duifangzhanli = 432
        break
      case 'fengxieshou5':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：540`
        duifangzhanli = 540
        break
      case 'fengxieshou6':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：648`
        duifangzhanli = 648
        break
      case 'fengxieshou7':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：756`
        duifangzhanli = 756
        break
      case 'fengxieshou8':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：864`
        duifangzhanli = 864
        break
      case 'fengxieshou9':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：972`
        duifangzhanli = 972
        break
      case 'fengxieshou10':
        text = `有妖怪袭击蜀山
        对手：风邪兽2
        战力：1080`
        duifangzhanli = 1080
        break
      case 'smallboss1':
        text = `妖界入侵
        对手：茅山狸
        战力：1000`
        duifangzhanli = 1200
        enemy = 'smallboss1'
        break
      case 'smallboss2':
        text = `妖界入侵
        对手：银眉妖狐
        战力：2000`
        duifangzhanli = 2000
        enemy = 'smallboss2'
        break
      case 'smallboss3':
        text = `妖界入侵
        对手：蝎魃
        战力：3000`
        duifangzhanli = 3000
        enemy = 'smallboss3'
        break
      case 'bigboss':
        text = `遇到妖界的首领天妖皇，掌门正在赶来，可以先避其锋芒
        对手：天妖皇
        战力：10000`
        duifangzhanli = 10000
        enemy = 'bigboss'
        break
      default:
        text = '遭遇敌人'
    }

    if (zhanli >= duifangzhanli) {
      wayToWin.push(jinengToWin)
    }

    that.setData({
      text,
      wayToWin,
      enemy,
      loading: true
    })
  },

  bindFightTap: function() {
    let enemy = this.data.enemy
    let gongxian = wx.getStorageSync('gongxian')

    // boss战
    if (enemy == 'smallboss1') {
      wx.redirectTo({
        url: '/pages/fight/fight?enemy=smallboss2',
      })
    } else if (enemy == 'smallboss2') {
      wx.redirectTo({
        url: '/pages/fight/fight?enemy=smallboss3',
      })
    } else if (enemy == 'smallboss3') {
      wx.setStorage({ key: 'gongxian', data: gongxian + 300 })

      wx.redirectTo({
        url: '/pages/fight/fight?enemy=bigboss',
      })
    } else if (enemy == 'bigboss') {
      wx.setStorage({ key: 'gongxian', data: gongxian + 700 })
      wx.setStorage({ key: 'todaysEventHappend', data: true })

      wx.redirectTo({
        url: '/pages/event/event?event=bigbosswin',
      })
    } else {
      // 常规战
      wx.setStorage({ key: 'xiuwei', data: this._xiuwei + 3 })
      wx.setStorage({ key: 'todaysEventHappend', data: true })

      wx.redirectTo({
        url: '/pages/event/event?event=fight',
      })
    }
  },

  bindEscapeTap: function () {
    // boss战
    let enemy = this.data.enemy
    if (enemy == 'smallboss1' || enemy == 'smallboss2' || enemy == 'smallboss3') {
      let npc = wx.getStorageSync('npc')
      npc.yipin = 'si'
      wx.setStorage({ key: 'npc', data: npc })
      wx.setStorage({ key: 'todaysEventHappend', data: true })

      wx.redirectTo({
        url: '/pages/event/event?event=yipinzhansi',
      })
    } else if (enemy == 'bigboss') {
      wx.setStorage({ key: 'todaysEventHappend', data: true })

      wx.redirectTo({
        url: '/pages/event/event?event=bigboss',
      })
    } else {
      // 常规战
      wx.setStorage({ key: 'todaysEventHappend', data: true })

      wx.redirectTo({
        url: '/pages/event/event?event=escape',
      })
    }
  },
})