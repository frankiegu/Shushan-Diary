//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util.js')
const innerAudioContext = wx.createInnerAudioContext()

Page({
  data: {
    time: 0,
    role: '',
    xiuwei: 0,
    gongxian: 0,
    date: '',
    roleText: '',
    bgm: false
  },

  onShow: function() {
    let todaysEventHappend = wx.getStorageSync('todaysEventHappend')
    let time = wx.getStorageSync('time')
    let role = wx.getStorageSync('role')
    let xiuwei = wx.getStorageSync('xiuwei')
    let gongxian = wx.getStorageSync('gongxian')
    let yishu = wx.getStorageSync('yishu')
    let qiyi = wx.getStorageSync('qiyi')
    let jiuliang = wx.getStorageSync('jiuliang')
    let xueshi = wx.getStorageSync('xueshi')
    let shufa = wx.getStorageSync('shufa')
    let yinlv = wx.getStorageSync('yinlv')
    let duanzao = wx.getStorageSync('duanzao')
    let shujia = wx.getStorageSync('shujia')
    let wuqijia = wx.getStorageSync('wuqijia')
    let yaogui = wx.getStorageSync('yaogui')
    let zawugui = wx.getStorageSync('zawugui')
    let npc = wx.getStorageSync('npc')

    let date = utils.formatTime(time)
    let roleText = utils.formatRole(role)

    this.setData({
      xiuwei,
      gongxian,
      date,
      time,
      role,
      roleText
    })
    console.log('蜀山', this.data)

    // 回合开始根据条件触发事件
    // 每个回合只触发一次事件
    if (!todaysEventHappend) {
      // 时间事件
      // 切磋弟子
      if (time == 2) {
        wx.redirectTo({
          url: '/pages/fight/fight?enemy=qiecuodizi',
        })
        return
      }
      // 打架弟子
      if (time == 5) {
        wx.redirectTo({
          url: '/pages/fight/fight?enemy=dajiadizi',
        })
        return
      }
      // 入侵前夕
      if (time == 359) {
        wx.setStorage({ key: 'todaysEventHappend', data: true })
        wx.redirectTo({
          url: '/pages/event/event?event=prepare',
        })
        return
      }
      // 妖界入侵
      if (time == 360) {
        wx.redirectTo({
          url: '/pages/fight/fight?enemy=smallboss1',
        })
        return
      }
      // 救活一贫
      if ((time == 360 || time == 361) && (npc.yipin == 'si') && (yaogui.indexOf('chixueliuzhudan') != -1)) {
        npc.yipin = 'sheng'
        wx.setStorage({ key: 'npc', data: npc })
        wx.redirectTo({
          url: '/pages/event/event?event=yipinfuhuo',
        })
      }
      // 即将去世
      if (time == 3590) {
        wx.setStorage({ key: 'todaysEventHappend', data: true })
        wx.redirectTo({
          url: '/pages/event/event?event=weak',
        })
        return
      }
      // 去世事件
      if (time == 3600) {
        wx.setStorage({ key: 'todaysEventHappend', data: true })
        wx.redirectTo({
          url: '/pages/event/event?event=die',
        })
        return
      }

      // 随机妖怪袭击蜀山
      if (time >= 3) {
        let random = utils.roll(10)
        if (random == 1) {
          let randomMonster = 'fengxieshou'
          if (time >= 36 && time < 72) {
            randomMonster = 'fengxieshou2'
          }
          if (time >= 72 && time < 108) {
            randomMonster = 'fengxieshou3'
          }
          if (time >= 108 && time < 144) {
            randomMonster = 'fengxieshou4'
          }
          if (time >= 144 && time < 180) {
            randomMonster = 'fengxieshou5'
          }
          if (time >= 180 && time < 216) {
            randomMonster = 'fengxieshou6'
          }
          if (time >= 216 && time < 252) {
            randomMonster = 'fengxieshou7'
          }
          if (time >= 252 && time < 288) {
            randomMonster = 'fengxieshou8'
          }
          if (time >= 288 && time < 324) {
            randomMonster = 'fengxieshou9'
          }
          if (time >= 324 && time < 360) {
            randomMonster = 'fengxieshou10'
          }
          wx.redirectTo({
            url: '/pages/fight/fight?enemy=' + randomMonster,
          })
          return
        }
      }

      // 条件事件
      // 蜀山入门弟子
      if ((xiuwei >= 10) && (role == 'shushandizi')) {
        shujia = shujia.concat('yujianshuxinde', 'yanzhouxinde', 'bingzhouxinde', 'leizhouxinde', 'fengzhouxinde', 'tuzhouxinde')

        wx.setStorage({ key: 'role', data: 'rumendizi' })
        wx.setStorage({ key: 'shujia', data: shujia })
        wx.redirectTo({
          url: '/pages/event/event?event=rumendizi',
        })
        return
      }
      // 掌门入室弟子
      if ((time < 36) && (role == 'rumendizi')) {
        const random = utils.roll(3333)
        if (random == 1) {
          shujia.push('chixingyunxinde', 'yefengwuxinde', 'jiaoyanluxinde')

          wx.setStorage({ key: 'role', data: 'taiwudizi' })
          wx.setStorage({ key: 'shujia', data: shujia })
          wx.redirectTo({
            url: '/pages/event/event?event=taiwudizi',
          })
          return
        }
      }
      // 长老
      if ((gongxian >= 500) && (role == 'rumendizi')) {
        let gaojifashu = ['fengxuebingtianxinde', 'lianyuhuohaixinde', 'leidongjiutianxinde', 'fengjuancanyunxinde', 'xingchendidongxinde']
        for (var i = 0; i < gaojifashu.length; i++) {
          if (shujia.indexOf(gaojifashu[i]) == -1) {
            shujia.push(gaojifashu[i])
          }
        }

        wx.setStorage({ key: 'role', data: 'zhanglao' })
        wx.setStorage({ key: 'shujia', data: shujia })
        wx.redirectTo({
          url: '/pages/event/event?event=zhanglao',
        })
        return
      }
      // 代掌门
      if ((gongxian >= 1000) && (role == 'rumendizi' || role == 'zhanglao')) {
        yaogui.push('chixueliuzhudan')

        wx.setStorage({ key: 'role', data: 'daizhangmen' })
        wx.setStorage({ key: 'yaogui', data: yaogui })
        wx.redirectTo({
          url: '/pages/event/event?event=daizhangmen',
        })
        return
      }
      // 武圣
      if ((xiuwei >= 3000) && (role == 'taiwudizi')) {
        wx.setStorage({ key: 'role', data: 'wusheng' })
        wx.redirectTo({
          url: '/pages/event/event?event=wusheng',
        })
        return
      }
      // 医圣
      if ((xiuwei >= 3000 && yishu >= 1000) && (role == 'caogudizi')) {
        wx.setStorage({ key: 'role', data: 'yisheng' })
        wx.redirectTo({
          url: '/pages/event/event?event=yisheng',
        })
        return
      }
      // 棋圣
      if ((xiuwei >= 3000 && qiyi >= 1000) && (role == 'qingshidizi')) {
        wx.setStorage({ key: 'role', data: 'qisheng' })
        wx.redirectTo({
          url: '/pages/event/event?event=qisheng',
        })
        return
      }
      // 酒圣
      if ((xiuwei >= 3000 && jiuliang >= 1000) && (role == 'yipindizi')) {
        wx.setStorage({ key: 'role', data: 'jiusheng' })
        wx.redirectTo({
          url: '/pages/event/event?event=jiusheng',
        })
        return
      }
      // 书圣
      if ((xiuwei >= 3000 && xueshi >= 1000) && (role == 'yushudizi')) {
        wx.setStorage({ key: 'role', data: 'shusheng' })
        wx.redirectTo({
          url: '/pages/event/event?event=shusheng',
        })
        return
      }
      // 笔圣
      if ((xiuwei >= 3000 && shufa >= 1000) && (role == 'tiebidizi')) {
        wx.setStorage({ key: 'role', data: 'bisheng' })
        wx.redirectTo({
          url: '/pages/event/event?event=bisheng',
        })
        return
      }
      // 音圣
      if ((xiuwei >= 3000 && yinlv >= 1000) && (role == 'lingyindizi')) {
        wx.setStorage({ key: 'role', data: 'yinsheng' })
        wx.redirectTo({
          url: '/pages/event/event?event=yinsheng',
        })
        return
      }
      // 铸剑长老
      if ((xiuwei >= 3000 && duanzao >= 1000) && (role == 'ziyindizi')) {
        wx.setStorage({ key: 'role', data: 'zhujianzhanglao' })
        wx.redirectTo({
          url: '/pages/event/event?event=zhujianzhanglao',
        })
        return
      }
      // 掌门
      if ((xiuwei >= 5000) && (gongxian >= 1000) && (role != 'zhangmen')) {
        wx.setStorage({ key: 'role', data: 'zhangmen' })
        wx.redirectTo({
          url: '/pages/event/event?event=zhangmen',
        })
        return
      }
      wx.setStorage({ key: 'todaysEventHappend', data: true })
    }
  },

  playBgm: function() {
    var that = this

    if (!that.data.bgm) {
      innerAudioContext.src = 'http://dl.stream.qqmusic.qq.com/C400101hymA71IfYmM.m4a?guid=4246908512&vkey=775F72F9285C083A0533251FC638646C6471588658F05E0D3E5B4070A5FBA2653F9004ED3E1FD6BA1048B14860EEF28468D3579E5DA4682D&uin=3521&fromtag=66'
      innerAudioContext.play()

      that.setData({
        bgm: true
      })
    } else {
      innerAudioContext.stop()
      innerAudioContext.destroy

      that.setData({
        bgm: false
      })
    }
  }
})
