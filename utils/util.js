
// 数据初始化
function initAllData() {
  // LocalStorage 所有数据初始化
  console.log('数据初始化')
  wx.setStorage({ key: 'firstTimePlayGame', data: 'false' })
  wx.setStorage({ key: 'todaysEventHappend', data: 'false' })
  wx.setStorage({ key: 'time', data: 0 })
  wx.setStorage({ key: 'role', data: 'shushandizi' })
  wx.setStorage({ key: 'wuqi', data: { id: 'wuqi', name: '木剑', value: 3, detail: '一把木剑' } })
  wx.setStorage({ key: 'jineng', data: { id: 'huijianxinde', name: '挥剑', value: 1, detail: '每天挥剑总结出的心得' } })
  wx.setStorage({ key: 'xiuwei', data: 0 })
  wx.setStorage({ key: 'gongxian', data: 0 })
  wx.setStorage({ key: 'huijian', data: 0 })
  wx.setStorage({ key: 'yujianshu', data: 0 })
  wx.setStorage({ key: 'shui', data: 0 })
  wx.setStorage({ key: 'huo', data: 0 })
  wx.setStorage({ key: 'lei', data: 0 })
  wx.setStorage({ key: 'feng', data: 0 })
  wx.setStorage({ key: 'tu', data: 0 })
  wx.setStorage({ key: 'yishu', data: 0 })
  wx.setStorage({ key: 'qiyi', data: 0 })
  wx.setStorage({ key: 'jiuliang', data: 0 })
  wx.setStorage({ key: 'xueshi', data: 0 })
  wx.setStorage({ key: 'shufa', data: 0 })
  wx.setStorage({ key: 'yinlv', data: 0 })
  wx.setStorage({ key: 'duanzao', data: 0 })
  wx.setStorage({ key: 'shujia', data: ['shixiongbiji', 'jinpingmei', 'huijianxinde'] })
  wx.setStorage({ key: 'wuqijia', data: ['mujian'] })
  wx.setStorage({ key: 'yaogui', data: ['zhixuecao'] })
  wx.setStorage({ key: 'zawugui', data: ['shitou'] })
  wx.setStorage({ key: 'npc', data: { taiwu: 'sheng', caogu: 'sheng', qingshi: 'sheng', yipin: 'sheng', yushu: 'sheng', tiebi: 'sheng', lingyin: 'sheng', ziyin: 'sheng', } })
}

// 随机
function roll(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// 从物品中选择随机房间里没有的一项
// 若都有，返回'allHave'
function randomSelect(goods, room) {
  let allHave = true
  for (let i = 0; i < goods.length; i++) {
    if (room.indexOf(goods[i]) == -1) {
      allHave = false
    }
  }
  if (allHave) {
    return 'allHave'
  }
  let random = roll(goods.length)
  let good = goods[random]
  if (room.indexOf(good) == -1) {
    return good
  } else {
    for (let i = 0; i < goods.length; i++) {
      if (room.indexOf(goods[i]) == -1) {
        return goods[i]
      }
    }
  }
}

// 杂物
function formatZawu(zawu) {
  switch(zawu) {
    case 'shitou':
      return {
        id: 'shitou',
        name: '石头',
        detail: '蜀山的石头'
      }
    default:
      return ''
  }
}

// 药
function formatYao(yao) {
  switch(yao) {
    case 'zhixuecao':
      return {
        id: 'zhixuecao',
        name: '止血草',
        detail: '用于止血'
      }
    case 'jinchuangyao':
      return {
        id: 'jinchuangyao',
        name: '金疮药',
        detail: '用于治疗外伤'
      }
    case 'chixueliuzhudan':
      return {
        id: 'chixueliuzhudan',
        name: '赤雪流珠丹',
        detail: '蜀山的镇门之宝，相传有生死人、肉白骨的奇效'
      }
    default:
      return ''
  }
}

// 武器
function formatWuqi(wuqi) {
  switch(wuqi) {
    // 剧情
    case 'mujian':
      return {
        id: 'mujian',
        name: '木剑',
        value: 3,
        detail: '一把木剑'
      }
    case 'tiejian':
      return {
        id: 'tiejian',
        name: '铁剑',
        value: 10,
        detail: '用铁矿铸成的剑'
      }
    case 'qingtongjian':
      return {
        id: 'qingtongjian',
        name: '青铜剑',
        value: 50,
        detail: '用铜和锡铸成的剑'
      }
    case 'jinggangjian':
      return {
        id: 'jinggangjian',
        name: '精钢剑',
        value: 100,
        detail: '用精钢铸成的剑'
      }
    case 'xuantiejian':
      return {
        id: 'xuantiejian',
        name: '玄铁剑',
        value: 300,
        detail: '用玄铁铸成的剑'
      }
    case 'hantiejian':
      return {
        id: 'hantiejian',
        name: '寒铁剑',
        value: 900,
        detail: '用寒铁铸成的剑'
      }
    case 'xuantiezhongjian':
      return {
        id: 'xuantiezhongjian',
        name: '玄铁重剑',
        value: 1000,
        detail: '从前罡斩长老所用武器'
      }
    case 'xiamingjian':
      return {
        id: 'xiamingjian',
        name: '夏螟剑',
        value: 3000,
        detail: '紫殷长老亲手铸造的剑，灵力充沛，收于匣中似有虫鸣'
      }
    // 游历
    case 'zhenshanjian':
      return {
        id: 'zhenshanjian',
        name: '镇山剑',
        value: 600,
        detail: '后主禅，延熙二年，造一大剑，长一丈二尺。镇剑口山，往往人见光辉，后人求之不获。'
      }
    case 'feijingjian':
      return {
        id: 'feijingjian',
        name: '飞景剑',
        value: 700,
        detail: '魏太子丕选兹良金，命彼国工，精而炼之，至于百辟，以为三剑：一曰飞景，二曰流采，三曰华铤。'
      }
    case 'liucaijian':
      return {
        id: 'liucaijian',
        name: '流采剑',
        value: 700,
        detail: '魏太子丕选兹良金，命彼国工，精而炼之，至于百辟，以为三剑：一曰飞景，二曰流采，三曰华铤。'
      }
    case 'huatingjian':
      return {
        id: 'huatingjian',
        name: '华铤剑',
        value: 700,
        detail: '魏太子丕选兹良金，命彼国工，精而炼之，至于百辟，以为三剑：一曰飞景，二曰流采，三曰华铤。'
      }
    case 'baihongjian':
      return {
        id: 'baihongjian',
        name: '白虹剑',
        value: 800,
        detail: '吴大皇帝有宝剑六，一曰白虹，二曰紫电，三曰辟邪，四曰流星，五曰青冥，六曰百里。'
      }
    case 'zidianjian':
      return {
        id: 'zidianjian',
        name: '紫电剑',
        value: 800,
        detail: '吴大皇帝有宝剑六，一曰白虹，二曰紫电，三曰辟邪，四曰流星，五曰青冥，六曰百里。'
      }
    case 'bixiejian':
      return {
        id: 'bixiejian',
        name: '辟邪剑',
        value: 800,
        detail: '吴大皇帝有宝剑六，一曰白虹，二曰紫电，三曰辟邪，四曰流星，五曰青冥，六曰百里。'
      }
    case 'liuxingjian':
      return {
        id: 'liuxingjian',
        name: '流星剑',
        value: 800,
        detail: '吴大皇帝有宝剑六，一曰白虹，二曰紫电，三曰辟邪，四曰流星，五曰青冥，六曰百里。'
      }
    case 'qingmingjian':
      return {
        id: 'qingmingjian',
        name: '青冥剑',
        value: 800,
        detail: '吴大皇帝有宝剑六，一曰白虹，二曰紫电，三曰辟邪，四曰流星，五曰青冥，六曰百里。'
      }
    case 'bailijian':
      return {
        id: 'bailijian',
        name: '百里剑',
        value: 800,
        detail: '吴大皇帝有宝剑六，一曰白虹，二曰紫电，三曰辟邪，四曰流星，五曰青冥，六曰百里。'
      }
    case 'yitianjian':
      return {
        id: 'yitianjian',
        name: '倚天剑',
        value: 900,
        detail: '魏武帝初时有二剑，一曰倚天，一曰青虹。'
      }
    case 'qinggangjian':
      return {
        id: 'qinggangjian',
        name: '青釭剑',
        value: 900,
        detail: '魏武帝初时有二剑，一曰倚天，一曰青虹。'
      }
    case 'yanrijian':
      return {
        id: 'yanrijian',
        name: '掩日剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'duanshuijian':
      return {
        id: 'duanshuijian',
        name: '断水剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'zhuanpojian':
      return {
        id: 'zhuanpojian',
        name: '转魄剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'xuanjianjian':
      return {
        id: 'xuanjianjian',
        name: '悬翦剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'jingnijian':
      return {
        id: 'jingnijian',
        name: '惊鲵剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'miehunjian':
      return {
        id: 'miehunjian',
        name: '灭魂剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'quexiejian':
      return {
        id: 'quexiejian',
        name: '却邪剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'zhengangjian':
      return {
        id: 'zhengangjian',
        name: '真刚剑',
        value: 3000,
        detail: '昆吾山，其下多赤金，色如火。昔黄帝伐蚩尤，陈兵于此地，掘深百丈，犹未及泉，惟见火光如星。地中多丹，炼石为铜，铜色青而利。泉色赤。山草木皆劲利，土亦刚而精。至越王勾践，使工人以白马白牛祠昆吾之神，采金铸之，以成八剑之精：一名掩日，以之指日，则光昼暗。金阴也，阴盛则阳灭。二名断水，以之划水，开即不合。三名转魄，以之指月，蟾兔为之倒转。四名悬翦，飞鸟游过触其刃，如斩截焉。五名惊鲵，以之泛海，鲸鲵为之深入。六曰灭魂，挟之夜行，不逢魑魅。七名却邪，有妖魅者，见之则伏。八名真刚，以切玉断金，如削土木矣。以应八方之气铸之也。'
      }
    case 'xiaolianjian':
      return {
        id: 'xiaolianjian',
        name: '宵练剑',
        value: 4000,
        detail: '孔周有三剑，上品含光，视之不可见，运之不知有。其所触也，泯然无际，经物而物不觉。中品承影，将旦昧爽之交，日夕昏明之际，北面而察之，淡淡焉若有物存，莫识其状。其所触也，窃窃然有声，经物而物不疾也。下品宵练，方昼则见影而不见光，方夜见光而不见形。其触物也，然而过，随过随合，觉疾而不血刃焉。'
      }
    case 'chengyingjian':
      return {
        id: 'chengyingjian',
        name: '承影剑',
        value: 5000,
        detail: '孔周有三剑，上品含光，视之不可见，运之不知有。其所触也，泯然无际，经物而物不觉。中品承影，将旦昧爽之交，日夕昏明之际，北面而察之，淡淡焉若有物存，莫识其状。其所触也，窃窃然有声，经物而物不疾也。下品宵练，方昼则见影而不见光，方夜见光而不见形。其触物也，然而过，随过随合，觉疾而不血刃焉。'
      }
    case 'hanguangjian':
      return {
        id: 'hanguangjian',
        name: '含光剑',
        value: 6000,
        detail: '孔周有三剑，上品含光，视之不可见，运之不知有。其所触也，泯然无际，经物而物不觉。中品承影，将旦昧爽之交，日夕昏明之际，北面而察之，淡淡焉若有物存，莫识其状。其所触也，窃窃然有声，经物而物不疾也。下品宵练，方昼则见影而不见光，方夜见光而不见形。其触物也，然而过，随过随合，觉疾而不血刃焉。'
      }
    case 'ganjiangjian':
      return {
        id: 'ganjiangjian',
        name: '干将剑',
        value: 9000,
        detail: '干将作剑，来五山之铁精，六合之金英。候天伺地，阴阳同光，百神临观，天气下降，而金铁之精不销沦流，于是干将不知其由。莫耶曰："子以善为剑闻于王，使子作剑，三月不成，其有意乎？"干将曰："吾不知其理也。"莫耶曰："夫神物之化，须人而成，今夫子作剑，得无得其人而后成乎？"干将曰："昔吾师作冶，金铁之类不销，夫妻俱入冶炉中，然后成物。至今后世，即山作冶，麻绖葌服，然后敢铸金于山。今吾作剑不变化者，其若斯耶？"莫耶曰："师知烁身以成物，吾何难哉！"于是干将妻乃断发剪爪，投于炉中，使童女童男三百人鼓橐装炭，金铁乃濡。遂以成剑，阳曰干将，阴曰莫耶，阳作龟文，阴作漫理。'
      }
    case 'moyejian':
      return {
        id: 'moyejian',
        name: '莫邪剑',
        value: 9000,
        detail: '干将作剑，来五山之铁精，六合之金英。候天伺地，阴阳同光，百神临观，天气下降，而金铁之精不销沦流，于是干将不知其由。莫耶曰："子以善为剑闻于王，使子作剑，三月不成，其有意乎？"干将曰："吾不知其理也。"莫耶曰："夫神物之化，须人而成，今夫子作剑，得无得其人而后成乎？"干将曰："昔吾师作冶，金铁之类不销，夫妻俱入冶炉中，然后成物。至今后世，即山作冶，麻绖葌服，然后敢铸金于山。今吾作剑不变化者，其若斯耶？"莫耶曰："师知烁身以成物，吾何难哉！"于是干将妻乃断发剪爪，投于炉中，使童女童男三百人鼓橐装炭，金铁乃濡。遂以成剑，阳曰干将，阴曰莫耶，阳作龟文，阴作漫理。'
      }
    case 'longyuanjian':
      return {
        id: 'longyuanjian',
        name: '龙渊剑',
        value: 9000,
        detail: '楚王召风胡子而问之曰：“寡人闻吴有干将，越有欧冶子，此二人甲世而生，天下未尝有。精诚上通天，下为烈士。寡人愿齎邦之重宝，皆以奉子，因吴王请此二人作铁剑，可乎？”风胡子曰：“善。”于是乃令风胡子之吴，见欧冶子、干将，使之作铁剑。欧冶子、干将凿茨山，泄其溪，取铁英，作为铁剑三枚：一曰龙渊，二曰泰阿，三曰工布。毕成，风胡子奏之楚王。楚王见此三剑之精神，大悦风胡子，问之曰：“此三剑何物所象？其名为何？”风胡子对曰：“一曰龙渊，二曰泰阿，三曰工布。”楚王曰：“何谓龙渊、泰阿、工布？”风胡子对曰：“欲知龙渊，观其状，如登高山，临深渊；欲知泰阿，观其釽，巍巍翼翼，如流水之波；欲知工布，釽从文起，至脊而止，如珠不可衽，文若流水不绝。” '
      }
    case 'taiejian':
      return {
        id: 'taiejian',
        name: '泰阿剑',
        value: 12000,
        detail: '楚王召风胡子而问之曰：“寡人闻吴有干将，越有欧冶子，此二人甲世而生，天下未尝有。精诚上通天，下为烈士。寡人愿齎邦之重宝，皆以奉子，因吴王请此二人作铁剑，可乎？”风胡子曰：“善。”于是乃令风胡子之吴，见欧冶子、干将，使之作铁剑。欧冶子、干将凿茨山，泄其溪，取铁英，作为铁剑三枚：一曰龙渊，二曰泰阿，三曰工布。毕成，风胡子奏之楚王。楚王见此三剑之精神，大悦风胡子，问之曰：“此三剑何物所象？其名为何？”风胡子对曰：“一曰龙渊，二曰泰阿，三曰工布。”楚王曰：“何谓龙渊、泰阿、工布？”风胡子对曰：“欲知龙渊，观其状，如登高山，临深渊；欲知泰阿，观其釽，巍巍翼翼，如流水之波；欲知工布，釽从文起，至脊而止，如珠不可衽，文若流水不绝。” 晋郑王闻而求之，不得，兴师围楚之城，三年不解。仓谷粟索，库无兵革。左右群臣、贤士，莫能禁止。于是楚王闻之，引泰阿之剑，登城而麾之。三军破败，士卒迷惑，流血千里，猛兽欧瞻，江水折扬，晋郑之头毕白。'
      }
    case 'gongbujian':
      return {
        id: 'gongbujian',
        name: '工布剑',
        value: 9000,
        detail: '楚王召风胡子而问之曰：“寡人闻吴有干将，越有欧冶子，此二人甲世而生，天下未尝有。精诚上通天，下为烈士。寡人愿齎邦之重宝，皆以奉子，因吴王请此二人作铁剑，可乎？”风胡子曰：“善。”于是乃令风胡子之吴，见欧冶子、干将，使之作铁剑。欧冶子、干将凿茨山，泄其溪，取铁英，作为铁剑三枚：一曰龙渊，二曰泰阿，三曰工布。毕成，风胡子奏之楚王。楚王见此三剑之精神，大悦风胡子，问之曰：“此三剑何物所象？其名为何？”风胡子对曰：“一曰龙渊，二曰泰阿，三曰工布。”楚王曰：“何谓龙渊、泰阿、工布？”风胡子对曰：“欲知龙渊，观其状，如登高山，临深渊；欲知泰阿，观其釽，巍巍翼翼，如流水之波；欲知工布，釽从文起，至脊而止，如珠不可衽，文若流水不绝。” '
      }
    case 'juquejian':
      return {
        id: 'juquejian',
        name: '巨阙剑',
        value: 9000,
        detail: '当造此剑之时，赤堇之山，破而出锡；若耶之溪，涸而出铜；雨师扫洒，雷公击橐；蛟龙捧鑪，天帝装炭；太一下观，天精下之。欧冶乃因天之精神，悉其伎巧，造为大刑三、小刑二：一曰湛卢，二曰纯钧，三曰胜邪，四曰鱼肠，五曰巨阙。'
      }
    case 'yuchangjian':
      return {
        id: 'yuchangjian',
        name: '鱼肠剑',
        value: 9000,
        detail: '当造此剑之时，赤堇之山，破而出锡；若耶之溪，涸而出铜；雨师扫洒，雷公击橐；蛟龙捧鑪，天帝装炭；太一下观，天精下之。欧冶乃因天之精神，悉其伎巧，造为大刑三、小刑二：一曰湛卢，二曰纯钧，三曰胜邪，四曰鱼肠，五曰巨阙。'
      }
    case 'shengxiejian':
      return {
        id: 'shengxiejian',
        name: '胜邪剑',
        value: 9000,
        detail: '当造此剑之时，赤堇之山，破而出锡；若耶之溪，涸而出铜；雨师扫洒，雷公击橐；蛟龙捧鑪，天帝装炭；太一下观，天精下之。欧冶乃因天之精神，悉其伎巧，造为大刑三、小刑二：一曰湛卢，二曰纯钧，三曰胜邪，四曰鱼肠，五曰巨阙。'
      }
    case 'chunjunjian':
      return {
        id: 'chunjunjian',
        name: '纯钧剑',
        value: 12000,
        detail: '当造此剑之时，赤堇之山，破而出锡；若耶之溪，涸而出铜；雨师扫洒，雷公击橐；蛟龙捧鑪，天帝装炭；太一下观，天精下之。欧冶乃因天之精神，悉其伎巧，造为大刑三、小刑二：一曰湛卢，二曰纯钧，三曰胜邪，四曰鱼肠，五曰巨阙。王取纯钧，薛烛闻之，忽如败。有顷，惧如悟。下阶而深惟，简衣而坐望之。手振拂扬，其华捽如芙蓉始出。观其釽，烂如列星之行；观其光，浑浑如水之溢于塘；观其断，岩岩如琐石；观其才，焕焕如冰释。'
      }
    case 'zhanlujian':
      return {
        id: 'zhanlujian',
        name: '湛卢剑',
        value: 12000,
        detail: '当造此剑之时，赤堇之山，破而出锡；若耶之溪，涸而出铜；雨师扫洒，雷公击橐；蛟龙捧鑪，天帝装炭；太一下观，天精下之。欧冶乃因天之精神，悉其伎巧，造为大刑三、小刑二：一曰湛卢，二曰纯钧，三曰胜邪，四曰鱼肠，五曰巨阙。所谓湛卢，五金之英，太阳之精，寄气托灵，出之有神，服之有威，可以折冲拒敌。剑之成也，精光贯天，日月争耀，星斗避彩，鬼神悲号'
      }
    case 'yeyingjian':
      return {
        id: 'yeyingjian',
        name: '曳影剑',
        value:30000,
        detail: '颛顼有曳影之剑，腾空而舒，若四方有兵，此剑则飞起指其方，则克伐；未用之时，常于匣里如龙虎之吟。'
      }
    case 'xuanyuanjian':
      return {
        id: 'xuanyuanjian',
        name: '轩辕剑',
        value: 100000,
        detail: '轩辕剑'
      }
    case 'shuilingzhu':
      return {
        id: 'shuilingzhu',
        name: '水灵珠',
        value: 1,
        detail: '蕴含着无穷法力的水系灵珠，是五灵珠之一。'
      }
    case 'huolingzhu':
      return {
        id: 'huolingzhu',
        name: '火灵珠',
        value: 1,
        detail: '蕴含着无穷法力的火系灵珠，是五灵珠之一。'
      }
    case 'leilingzhu':
      return {
        id: 'leilingzhu',
        name: '雷灵珠',
        value: 1,
        detail: '蕴含着无穷法力的雷系灵珠，是五灵珠之一。'
      }
    case 'fenglingzhu':
      return {
        id: 'fenglingzhu',
        name: '风灵珠',
        value: 1,
        detail: '蕴含着无穷法力的风系灵珠，是五灵珠之一。'
      }
    case 'tulingzhu':
      return {
        id: 'tulingzhu',
        name: '土灵珠',
        value: 1,
        detail: '蕴含着无穷法力的土系灵珠，是五灵珠之一。'
      }
    default:
      return ''
  }
}

// 书（技能）
function formatShu(shu) {
  switch (shu) {
    case 'shixiongbiji':
      return {
        id: 'shixiongbiji',
        name: '过去弟子的笔记',
        detail: '妖界每百年入侵一次，蜀山派会在此前十年广收门徒，增强实力，抵御妖魔。',
      }
    case 'huijianxinde':
      return {
        id: 'huijianxinde',
        name: '挥剑',
        value: 1,
        detail: '修炼挥剑的心得'
      }
    case 'jianqixinde':
      return {
        id: 'jianqixinde',
        name: '剑气',
        value: 3,
        detail: '日复一日的挥剑，逐渐形成剑气',
      }
    case 'tianjianxinde':
      return {
        id: 'tianjianxinde',
        name: '天剑',
        value: 9,
        detail: '年复一年的挥剑，领悟天剑',
      }
    case 'yujianshuxinde':
      return {
        id: 'yujianshuxinde',
        name: '御剑术',
        value: 2,
        detail: '修炼御剑术的心得'
      }
    case 'jianqizhanxinde':
      return {
        id: 'jianqizhanxinde',
        name: '剑气斩',
        value: 4,
        detail: '修炼剑气斩的心得'
      }
    case 'yujianfumoxinde':
      return {
        id: 'yujianfumoxinde',
        name: '御剑伏魔',
        value: 6,
        detail: '修炼御剑伏魔的心得'
      }
    case 'jianshenxinde':
      return {
        id: 'jianshenxinde',
        name: '剑神',
        value: 9,
        detail: '御剑术登峰造极，可以召唤剑神'
      }
    case 'bingzhouxinde':
      return {
        id: 'bingzhouxinde',
        name: '冰咒',
        value: 2,
        detail: '修炼冰咒的心得'
      }
    case 'xuanbingzhouxinde':
      return {
        id: 'xuanbingzhouxinde',
        name: '玄冰咒',
        value: 4,
        detail: '修炼玄冰咒的心得'
      }
    case 'fengxuebingtianxinde':
      return {
        id: 'fengxuebingtianxinde',
        name: '风雪冰天',
        value: 6,
        detail: '修炼风雪冰天的心得'
      }
    case 'xueyaoxinde':
      return {
        id: 'xueyaoxinde',
        name: '雪妖',
        value: 9,
        detail: '水系法术登峰造极，可以召唤雪妖'
      }
    case 'yanzhouxinde':
      return {
        id: 'yanzhouxinde',
        name: '炎咒',
        value: 2,
        detail: '修炼炎咒的心得'
      }
    case 'chiyanshuxinde':
      return {
        id: 'chiyanshuxinde',
        name: '炽炎术',
        value: 4,
        detail: '修炼炽炎术的心得'
      }
    case 'lianyuhuohaixinde':
      return {
        id: 'lianyuhuohaixinde',
        name: '炼狱火海',
        value: 6,
        detail: '修炼炼狱火海的心得'
      }
    case 'huoshenxinde':
      return {
        id: 'huoshenxinde',
        name: '火神',
        value: 9,
        detail: '火系法术登峰造极，可以召唤火神'
      }
    case 'leizhouxinde':
      return {
        id: 'leizhouxinde',
        name: '雷咒',
        value: 2,
        detail: '修炼雷咒的心得'
      }
    case 'wuleizhouxinde':
      return {
        id: 'wuleizhouxinde',
        name: '五雷咒',
        value: 4,
        detail: '修炼五雷咒的心得'
      }
    case 'leidongjiutianxinde':
      return {
        id: 'leidongjiutianxinde',
        name: '雷动九天',
        value: 6,
        detail: '修炼雷动九天的心得'
      }
    case 'leishenxinde':
      return {
        id: 'leishenxinde',
        name: '雷神',
        value: 9,
        detail: '雷系法术登峰造极，可以召唤雷神'
      }
    case 'fengzhouxinde':
      return {
        id: 'fengzhouxinde',
        name: '风咒',
        value: 2,
        detail: '修炼风咒的心得'
      }
    case 'xuanfengzhouxinde':
      return {
        id: 'xuanfengzhouxinde',
        name: '旋风咒',
        value: 4,
        detail: '修炼旋风咒的心得'
      }
    case 'fengjuancanyunxinde':
      return {
        id: 'fengjuancanyunxinde',
        name: '风卷残云',
        value: 6,
        detail: '修炼风卷残云的心得'
      }
    case 'fenggshenxinde':
      return {
        id: 'fenggshenxinde',
        name: '风神',
        value: 9,
        detail: '风系法术登峰造极，可以召唤风神'
      }
    case 'tuzhouxinde':
      return {
        id: 'tuzhouxinde',
        name: '土咒',
        value: 2,
        detail: '修炼土咒的心得'
      }
    case 'feiyuanshuxinde':
      return {
        id: 'feiyuanshuxinde',
        name: '飞岩术',
        value: 4,
        detail: '修炼飞岩术的心得'
      }
    case 'xingchendidongxinde':
      return {
        id: 'xingchendidongxinde',
        name: '星沉地动',
        value: 6,
        detail: '修炼星沉地动的心得'
      }
    case 'shanshenxinde':
      return {
        id: 'shanshenxinde',
        name: '山神',
        value: 9,
        detail: '土系法术登峰造极，可以召唤山神'
      }
    case 'chixingyunxinde':
      return {
        id: 'chixingyunxinde',
        name: '炽星陨',
        value: 4,
        detail: '掌门传授的炽星陨',
      }
    case 'yefengwuxinde':
      return {
        id: 'yefengwuxinde',
        name: '叶风舞',
        value: 4,
        detail: '掌门传授的叶风舞',
      }
    case 'jiaoyanluxinde':
      return {
        id: 'jiaoyanluxinde',
        name: '蛟岩戮',
        value: 4,
        detail: '掌门传授的蛟岩戮',
      }
    case 'tianxuanmijuxinde':
      return {
        id: 'tianxuanmijuxinde',
        name: '天璇迷局',
        value: 6,
        detail: '青石传授的天璇迷局',
      }
    case 'zuixianwangyuebuxinde':
      return {
        id: 'zuixianwangyuebuxinde',
        name: '醉仙望月步',
        value: 4,
        detail: '一贫传授的醉仙望月步',
      }
    case 'jiushenxinde':
      return {
        id: 'jiushenxinde',
        name: '酒神',
        value: 9,
        detail: '一贫传授的酒神',
      }
    case 'wanjianjuexinde':
      return {
        id: 'wanjianjuexinde',
        name: '万剑诀',
        value: 10,
        detail: '一贫传授的万剑诀',
      }
    case 'tianquanqizhenxinde':
      return {
        id: 'tianquanqizhenxinde',
        name: '天权奇阵',
        value: 6,
        detail: '玉书传授的天权奇阵',
      }
    case 'kaiyanghuanjingxinde':
      return {
        id: 'kaiyanghuanjingxinde',
        name: '开阳幻境',
        value: 6,
        detail: '铁笔传授的开阳幻境',
      }
    case 'ningyinquxinde':
      return {
        id: 'ningyinquxinde',
        name: '宁音曲',
        value: 4,
        detail: '凌音传授的宁音曲',
      }
    case 'qiongguangpozhenquxinde':
      return {
        id: 'qiongguangpozhenquxinde',
        name: '穹光破阵曲',
        value: 6,
        detail: '凌音传授的穹光破阵曲',
      }
    case 'qianfangcanguangjianxinde':
      return {
        id: 'qianfangcanguangjianxinde',
        name: '千方残光剑',
        value: 10,
        detail: '紫殷传授的千方残光剑',
      }
    case 'jinpingmei':
      return {
        id: 'jinpingmei',
        name: '金瓶梅',
        detail: '北宋末年政和年间的风俗故事。宋朝徽宗政和年间，山东省东平府清河县出了一位风流子弟，叫西门庆。时年27岁，生的风流倜傥，多才多艺，娶妻吴月娘，时年22岁，也是美貌温柔，脾气和顺。他们生有一女，名叫西门大姐，年仅12岁，已许配给东京八十万禁军教头杨提督的亲家陈洪的儿子陈经济（敬济）为妻，小两口在东京住。西门庆家宅豪富，在清河县开着一个相当大的中药铺。因为有钱，又娶了两位小妾，是二娘李娇儿，四娘孙雪娥。这一天，西门庆在紫石街闲游，巧遇武大郎的妻子潘金莲，顿时被潘氏的美貌所倾倒......',
      }
    default:
      return ''
  }
}

// 身份格式化
function formatRole(role) {
  switch(role) {
    case 'shushandizi':
      return '蜀山弟子'
    case 'rumendizi':
      return '蜀山入门弟子'
    case 'taiwudizi':
      return '太武入室弟子'
    case 'caogudizi':
      return '草谷入室弟子'
    case 'qingshidizi':
      return '青石入室弟子'
    case 'yipindizi':
      return '一贫入室弟子'
    case 'yushudizi':
      return '玉书入室弟子'
    case 'tiebidizi':
      return '铁笔入室弟子'
    case 'lingyindizi':
      return '凌音入室弟子'
    case 'ziyindizi':
      return '紫殷入室弟子'
    case 'zhanglao':
      return '蜀山长老'
    case 'daizhangmen':
      return '蜀山代掌门'
    case 'wusheng':
      return '天枢宫武圣'
    case 'yisheng':
      return '玉衡宫医圣'
    case 'qisheng':
      return '天璇宫棋圣'
    case 'jiusheng':
      return '天玑宫酒圣'
    case 'shusheng':
      return '天权宫书圣'
    case 'bisheng':
      return '开阳宫笔圣'
    case 'yinsheng':
      return '瑶光宫音圣'
    case 'zhujianzhanglao':
      return '铸剑长老'
    case 'zhangmen':
      return '蜀山掌门'
    default:
      return ''
  }
}

// 时间格式化为日期
// function formatTime(time) {
//   let year = Math.floor(time / 360) + 1
//   let restOfYear = time % 360
//   let month = Math.floor(restOfYear / 30) + 1
//   let day = restOfYear % 30 + 1
//   let date = arToZh(year) + '年' + arToZh(month) + '月' + arToZh(day) + '日'
//   return date
// }
function formatTime(time) {
  let year = Math.floor(time / 36) + 1
  let restOfYear = time % 36
  let month = Math.floor(restOfYear / 3) + 1
  let day = restOfYear % 3 + 1
  let period = ''
  if (day == 1) {
    period = '上旬'
  } else if (day == 2) {
    period = '中旬'
  } else if (day == 3) {
    period = '下旬'
  }
  let date = arToZh(year) + '年' + arToZh(month) + '月' + period
  return date
}

function arToZh(ar) {
  let arr = (ar + '').split('')
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '1':
        arr[i] = '一'
        break;
      case '2':
        arr[i] = '二' 
        break;
      case '3':
        arr[i] = '三'
        break;
      case '4':
        arr[i] = '四'
        break;
      case '5':
        arr[i] = '五'
        break;
      case '6':
        arr[i] = '六'
        break;
      case '7':
        arr[i] = '七'
        break;
      case '8':
        arr[i] = '八'
        break;
      case '9':
        arr[i] = '九'
        break;
      default:
        arr[i] = ''
    }
  }
  let units = arr.slice(-1)
  let tens = ''
  let hundreds = ''
  if (arr.length == 2) {
    tens = (arr.slice(-2, -1) == '一') ? '十' : (arr.slice(-2, -1) + '十')
  }
  if (arr.length >= 3) {
    hundreds = arr.slice(-3, -2) + '百'
    units = ''
  }
  let zh = hundreds + tens + units
  return zh
}

module.exports = {
  roll,
  randomSelect,
  formatShu,
  formatWuqi,
  formatYao,
  formatZawu,
  formatTime,
  formatRole,
  initAllData,
}
