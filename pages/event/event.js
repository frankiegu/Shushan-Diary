// pages/event/event.js
Page({
  
  data: {
    text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // event 只展示文字，数据变更在发生事件的页面进行
    let text = ''

    switch(options.event) {
      // 养成结果
      case 'menpaishiwu':
        text = '处理门派事务，获得修为+1，贡献+3'
        break
      case 'huijian':
        text = '修炼挥剑，获得修为+3'
        break
      case 'jianqi':
        text = '嫉恶如仇剑如蛟，除魔重任一肩挑。纵横四海荡诸邪，跨越千山斩群妖。日复一日的挥剑，逐渐形成剑气。'
        break
      case 'tianjian':
        text = '嫉恶如仇剑如蛟，除魔重任一肩挑。纵横四海荡诸邪，跨越千山斩群妖。年复一年的挥剑，领悟天剑。'
        break
      case 'yujianshu':
        text = '修炼御剑术，获得修为+3'
        break
      case 'jianqizhan':
        text = '嫉恶如仇剑如蛟，除魔重任一肩挑。纵横四海荡诸邪，跨越千山斩群妖。御剑术越来越熟练，学会剑气斩。'
        break
      case 'yujianfumo':
        text = '嫉恶如仇剑如蛟，除魔重任一肩挑。纵横四海荡诸邪，跨越千山斩群妖。御剑术越来越熟练，学会御剑伏魔。'
        break
      case 'jianshen':
        text = '嫉恶如仇剑如蛟，除魔重任一肩挑。纵横四海荡诸邪，跨越千山斩群妖。御剑术登峰造极，可以召唤剑神。'
        break
      case 'bingzhou':
        text = '修炼冰咒，获得修为+3'
        break
      case 'xuanbingzhou':
        text = '水系法术越来越娴熟，学会玄冰咒'
        break
      case 'fengxuebingtian':
        text = '水系法术越来越娴熟，学会风雪冰天'
        break
      case 'xueyao':
        text = '水系法术登峰造极，可以召唤雪妖'
        break
      case 'yanzhou':
        text = '修炼炎咒，获得修为+3'
        break
      case 'chiyanshu':
        text = '火系法术越来越娴熟，学会炽炎术'
        break
      case 'lianyuhuohai':
        text = '火系法术越来越娴熟，学会炼狱火海'
        break
      case 'huoshen':
        text = '火系法术登峰造极，可以召唤火神'
        break
      case 'leizhou':
        text = '修炼雷咒，获得修为+3'
        break
      case 'wuleizhou':
        text = '雷系法术越来越娴熟，学会五雷咒'
        break
      case 'leidongjiutian':
        text = '雷系法术越来越娴熟，学会雷动九天'
        break
      case 'leishen':
        text = '雷系法术登峰造极，可以召唤雷神'
        break
      case 'fengzhou':
        text = '修炼风咒，获得修为+3'
        break
      case 'xuanfengzhou':
        text = '风系法术越来越娴熟，学会旋风咒'
        break
      case 'fengjuancanyun':
        text = '风系法术越来越娴熟，学会风卷残云'
        break
      case 'fenggshen':
        text = '风系法术登峰造极，可以召唤风神'
        break
      case 'tuzhou':
        text = '修炼土咒，获得修为+3'
        break
      case 'feiyuanshu':
        text = '土系法术越来越娴熟，学会飞岩术'
        break
      case 'xingchendidong':
        text = '土系法术越来越娴熟，学会星沉地动'
        break
      case 'shanshen':
        text = '土系法术登峰造极，可以召唤山神'
        break
      case 'chixingyun':
        text = '修炼炽星陨，获得修为+4'
        break
      case 'yefengwu':
        text = '修炼叶风舞，获得修为+4'
        break
      case 'jiaoyanlu':
        text = '修炼蛟岩戮，获得修为+4'
        break
      case 'caiyao':
        text = '采集草药，获得修为+1 医术+1'
        break
      case 'liandan':
        text = '使用丹炉炼丹，获得修为+1 医术+3'
        break
      case 'caoguzhidian':
        text = '偶然得到草谷指点，获得修为+10 医术+10'
        break
      case 'caogudizi':
        text = '草谷长老与你有缘，将你收为入室弟子'
        break
      case 'lianchengchixueliuzhudan':
        text = '机缘巧合之下，炼成了赤雪流珠丹'
        break
      case 'dapu':
        text = '打谱，获得修为+1 棋艺+1'
        break
      case 'duiyi':
        text = '与青石对弈，获得修为+1 棋艺+3'
        break
      case 'qingshizhidian':
        text = '偶然得到青石指点，获得修为+10 棋艺+10'
        break
      case 'qingshidizi':
        text = '青石长老与你有缘，将你收为入室弟子'
        break
      case 'tianxuanmiju':
        text = '青石传授了天璇迷局'
        break
      case 'hejiu':
        text = '与一贫喝酒，获得修为+1 酒量+1'
        break
      case 'huaquan':
        text = '与一贫划拳，获得修为+1 酒量+3'
        break
      case 'yipinzhidian':
        text = '偶然得到一贫指点，获得修为+10 酒量+10'
        break
      case 'yipindizi':
        text = '一贫长老与你有缘，将你收为入室弟子'
        break
      case 'zuixianwangyuebu':
        text = '一贫传授了醉仙望月步'
        break
      case 'jiushen':
        text = '一贫传授了酒神'
        break
      case 'wanjianjue':
        text = '一贫传授了万剑诀'
        break
      case 'zhenglidianji':
        text = '整理书架，获得修为+1 学识+1'
        break
      case 'canyuedianji':
        text = '博览群书，获得修为+1 学识+3'
        break
      case 'yushuzhidian':
        text = '偶然得到玉书指点，获得修为+10 学识+10'
        break
      case 'yushudizi':
        text = '玉书长老与你有缘，将你收为入室弟子'
        break
      case 'xueshi5000':
        text = '读到记载蜀山中级法术的书卷，学会玄冰咒、炽炎术、五雷咒、旋风咒、飞岩术'
        break
      case 'tianquanqizhen':
        text = '玉书传授了天权奇阵'
        break
      case 'xueshi9000':
        text = '读到记载蜀山高级法术的书卷，学会风雪冰天、炼狱火海、雷动九天、风卷残云、星沉地动'
        break
      case 'linmo':
        text = '临摹字帖，获得修为+1 书法+1'
        break
      case 'xiezi':
        text = '写字，获得修为+1 书法+3'
        break
      case 'tiebizhidian':
        text = '偶然得到铁笔指点，获得修为+10 书法+10'
        break
      case 'tiebidizi':
        text = '铁笔长老与你有缘，将你收为入室弟子'
        break
      case 'xuantiezhongjian':
        text = '铁笔赠与一柄武器，玄铁重剑'
        break
      case 'kaiyanghuanjing':
        text = '铁笔传授了开阳幻境'
        break
      case 'zhifa':
        text = '练习指法，获得修为+1 音律+1'
        break
      case 'zouyue':
        text = '演奏雅乐，获得修为+1 音律+3'
        break
      case 'lingyinzhidian':
        text = '偶然得到凌音指点，获得修为+10 音律+10'
        break
      case 'lingyindizi':
        text = '凌音长老与你有缘，将你收为入室弟子'
        break
      case 'ningyinqu':
        text = '凌音传授了宁音曲'
        break
      case 'qiongguangpozhenqu':
        text = '凌音传授了穹光破阵曲'
        break
      case 'wakuang':
        text = '挖取矿石，获得修为+1 锻造+1'
        break
      case 'zhujian':
        text = '在剑池铸剑，获得修为+1 锻造+3'
        break
      case 'ziyinzhidian':
        text = '偶然得到紫殷指点，获得修为+10 锻造+10'
        break
      case 'ziyindizi':
        text = '紫殷长老与你有缘，将你收为入室弟子'
        break
      case 'tiejian':
        text = '铸成了铁剑'
        break
      case 'qingtongjian':
        text = '铸成了青铜剑'
        break
      case 'jinggangjian':
        text = '铸成了精钢剑'
        break
      case 'xuantiejian':
        text = '铸成了玄铁剑'
        break
      case 'hantiejian':
        text = '铸成了寒铁剑'
        break
      case 'xiamingjian':
        text = '紫殷赠与一柄武器，夏螟剑'
        break
      case 'qianfangcanguangjian':
        text = '紫殷传授了千方残光剑'
        break
      case 'youli':
        text = '外出游历，获得修为+1'
        break
      case 'zhenshanjian':
        text = '在外游历时，得到镇山剑'
        break
      case 'feijingjian':
        text = '在外游历时，得到飞景剑'
        break
      case 'liucaijian':
        text = '在外游历时，得到流采剑'
        break
      case 'huatingjian':
        text = '在外游历时，得到华铤剑'
        break
      case 'baihongjian':
        text = '在外游历时，得到白虹剑'
        break
      case 'zidianjian':
        text = '在外游历时，得到紫电剑'
        break
      case 'bixiejian':
        text = '在外游历时，得到辟邪剑'
        break
      case 'liuxingjian':
        text = '在外游历时，得到流星剑'
        break
      case 'qingmingjian':
        text = '在外游历时，得到青冥剑'
        break
      case 'bailijian':
        text = '在外游历时，得到百里剑'
        break
      case 'yitianjian':
        text = '在外游历时，得到倚天剑'
        break
      case 'qinggangjian':
        text = '在外游历时，得到青釭剑'
        break
      case 'yanrijian':
        text = '在外游历时，得到掩日剑'
        break
      case 'duanshuijian':
        text = '在外游历时，得到断水剑'
        break
      case 'zhuanpojian':
        text = '在外游历时，得到转魄剑'
        break
      case 'xuanjianjian':
        text = '在外游历时，得到玄翦剑'
        break
      case 'jingnijian':
        text = '在外游历时，得到惊鲵剑'
        break
      case 'miehunjian':
        text = '在外游历时，得到灭魄剑'
        break
      case 'quexiejian':
        text = '在外游历时，得到却邪剑'
        break
      case 'zhengangjian':
        text = '在外游历时，得到真刚剑'
        break
      case 'xiaolianjian':
        text = '在外游历时，得到宵练剑'
        break
      case 'chengyingjian':
        text = '在外游历时，得到承影剑'
        break
      case 'hanguangjian':
        text = '在外游历时，得到含光剑'
        break
      case 'ganjiangjian':
        text = '在外游历时，得到干将剑'
        break
      case 'moyejian':
        text = '在外游历时，得到莫邪剑'
        break
      case 'longyuanjian':
        text = '在外游历时，得到龙渊剑'
        break
      case 'taiejian':
        text = '在外游历时，得到泰阿剑'
        break
      case 'gongbujian':
        text = '在外游历时，得到工布剑'
        break
      case 'juquejian':
        text = '在外游历时，得到巨阙剑'
        break
      case 'yuchangjian':
        text = '在外游历时，得到鱼肠剑'
        break
      case 'shengxiejian':
        text = '在外游历时，得到胜邪剑'
        break
      case 'chunjunjian':
        text = '在外游历时，得到纯钧剑'
        break
      case 'zhanlujian':
        text = '在外游历时，得到湛卢剑'
        break
      case 'yeyingjian':
        text = '在外游历时，得到曳影剑'
        break
      case 'xuanyuanjian':
        text = '在外游历时，得到轩辕剑'
        break
      case 'shuilingzhu':
        text = '在外游历时，得到水灵珠'
        break
      case 'huolingzhu':
        text = '在外游历时，得到火灵珠'
        break
      case 'leilingzhu':
        text = '在外游历时，得到雷灵珠'
        break
      case 'fenglingzhu':
        text = '在外游历时，得到风灵珠'
        break
      case 'tulingzhu':
        text = '在外游历时，得到土灵珠'
        break
      case 'biguan5':
        text = '闭关修炼，获得修为+5'
        break
      case 'biguan7':
        text = '闭关修炼，获得修为+7'
        break
      case 'biguan10':
        text = '闭关修炼，获得修为+10'
        break

      // 蜀山事件
      case 'kaishi':
        text = '8岁时被云游的蜀山长老看到，认为有过人的资质和仙家风骨，经家人同意后，带到蜀山修行'
        break
      case 'rumendizi':
        text = '修炼获得认可，成为蜀山入门弟子，学会御剑术、低级法术，可以游历、学习技艺、修炼法术'
        break
      case 'taiwudizi':
        text = '太武掌门认为你的天赋远胜常人，将你收为入室弟子'
        break
      case 'zhanglao':
        text = '擅长处理门派事务，被任命为长老，学会高级法术，可以闭关修炼'
        break
      case 'daizhangmen':
        text = '远方有异变，掌门前去查看，在此期间，任命你为代掌门，获得赤雪流珠丹'
        break
      case 'wusheng':
        text = '接任武圣，镇守天枢宫'
        break
      case 'yisheng':
        text = '接任医圣，镇守玉衡宫'
        break
      case 'qisheng':
        text = '接任棋圣，镇守天璇宫'
        break
      case 'jiusheng':
        text = '接任酒圣，镇守天玑宫'
        break
      case 'shusheng':
        text = '接任书圣，镇守天权宫'
        break
      case 'bisheng':
        text = '接任笔圣，镇守开阳宫'
        break
      case 'yinsheng':
        text = '接任音圣，镇守瑶光宫'
        break
      case 'zhujianzhanglao':
        text = '接任铸剑长老，负责剑池事务'
        break
      case 'zhangmen':
        text = '修为已臻化境，对门派功不可没，太武掌门指定你为新一任蜀山掌门'
        break
      case 'prepare':
        text = '妖界即将入侵，请蜀山弟子做好准备'
        break
      case 'weak':
        text = '身体日益虚弱，感到自己大限将至'
        break
      case 'die':
        text = '阳寿已尽，在蜀山去世'
        break

      // 战斗
      case 'fight':
        text = '击败对方，获得修为+3'
        break
      case 'escape':
        text = '从战斗中逃离，安全无事'
        break
      case 'bigboss':
        text = '掌门带领大家击退了妖界的入侵，人世免于生灵涂炭，蜀山也回归平静，获得贡献+300'
        break
      case 'bigbosswin':
        text = '战胜妖王，掌门带领大家击退了妖界的入侵，人世免于生灵涂炭，蜀山也回归平静，获得贡献+1000'
        break
      case 'yipinzhansi':
        text = '没能躲开敌人的追击，一贫长老为了救你，舍身挡下致命攻击，掌门带领大家击退了妖界的入侵，然而一贫长老也伤重身亡'
        break
      case 'yipinfuhuo':
        text = '你用赤雪流珠丹救活了一贫长老'
        break

      default:
        text = '无事件描述'
    }

    this.setData({
      text
    })
  },

  bindConfirmTap: function() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})