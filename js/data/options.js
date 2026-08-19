/**
 * =====================================================
 * 咖啡谏言 · 调配选项数据库
 * 文件：js/data/options.js
 *
 * 后续扩充数据时：
 * - 只向 optionData 对应数组中追加对象
 * - 不要更改字段名称
 * - 不要修改 steps、state、defaultVisual
 * =====================================================
 */

const optionData = {
  /**
   * Step 1：咖啡豆
   * 主要影响：咖啡液颜色、浓淡、crema 色彩、情绪光晕
   */
  beans: [
 {
  id: "panama_geisha",
  label: "巴拿马瑰夏",
  subtitle: "白花 / 优雅 / 留白",
  traits: ["floral", "elegant", "transparent"],
  visual: {
    liquidColor: "#A66D46",
    liquidOpacity: 0.78,
    cremaColor: "#E4C59D",
    moodColor: "rgba(230, 208, 185, 0.25)",
    liquidHeight: "68%"
  }
},
{
  id: "sumatra_mandheling",
  label: "深烘曼特宁",
  subtitle: "草本 / 深沉 / 沉思",
  traits: ["herbal", "dark", "deep"],
  visual: {
    liquidColor: "#4A2E1B",
    liquidOpacity: 0.95,
    cremaColor: "#B58957",
    moodColor: "rgba(163, 131, 102, 0.35)",
    liquidHeight: "72%"
  }
},
{
  id: "colombia_huila",
  label: "哥伦比亚慧兰",
  subtitle: "焦糖 / 平和 / 日常",
  traits: ["caramel", "balanced", "calm"],
  visual: {
    liquidColor: "#7B4C29",
    liquidOpacity: 0.88,
    cremaColor: "#D1A979",
    moodColor: "rgba(209, 182, 147, 0.28)",
    liquidHeight: "70%"
  }
},
{
  id: "kenya_aa_light",
  label: "浅烘肯尼亚",
  subtitle: "圣女果 / 明亮 / 跃动",
  traits: ["tomato", "bright", "vibrant"],
  visual: {
    liquidColor: "#934A28",
    liquidOpacity: 0.72,
    cremaColor: "#D8A373",
    moodColor: "rgba(225, 181, 150, 0.22)",
    liquidHeight: "65%"
  }
},
{
  id: "yunnan_puer_wash",
  label: "云南水洗小粒",
  subtitle: "红茶 / 质朴 / 归乡",
  traits: ["tea", "earthy", "nostalgic"],
  visual: {
    liquidColor: "#8C5432",
    liquidOpacity: 0.85,
    cremaColor: "#CC9E6F",
    moodColor: "rgba(205, 175, 137, 0.26)",
    liquidHeight: "75%"
  }
},
{
  id: "costa_rica_tarrazu",
  label: "塔拉珠蜜处理",
  subtitle: "果脯 / 温润 / 抚慰",
  traits: ["fruity", "sweet", "gentle"],
  visual: {
    liquidColor: "#824522",
    liquidOpacity: 0.82,
    cremaColor: "#D4A575",
    moodColor: "rgba(215, 185, 155, 0.3)",
    liquidHeight: "70%"
  }
},
{
  id: "guatemala_antigua",
  label: "安提瓜火山豆",
  subtitle: "烟熏 / 稳重 / 笃定",
  traits: ["smoky", "stable", "firm"],
  visual: {
    liquidColor: "#56321A",
    liquidOpacity: 0.92,
    cremaColor: "#C29562",
    moodColor: "rgba(180, 150, 120, 0.32)",
    liquidHeight: "68%"
  }
},
{
  id: "ethiopia_yirgacheffe",
  label: "日晒耶加雪菲",
  subtitle: "柑橘 / 苏醒 / 纯粹",
  traits: ["citrus", "clean", "awake"],
  visual: {
    liquidColor: "#A3653A",
    liquidOpacity: 0.75,
    cremaColor: "#DFC198",
    moodColor: "rgba(232, 210, 182, 0.24)",
    liquidHeight: "66%"
  }
},
{
  id: "brazil_cerrado",
  label: "巴西喜拉多",
  subtitle: "坚果 / 宽厚 / 依靠",
  traits: ["nutty", "mild", "supportive"],
  visual: {
    liquidColor: "#6A4023",
    liquidOpacity: 0.9,
    cremaColor: "#CBA47E",
    moodColor: "rgba(195, 170, 145, 0.28)",
    liquidHeight: "73%"
  }
},
{
  id: "honduras_marcala",
  label: "洪都拉斯马尔卡拉",
  subtitle: "黑巧 / 幽暗 / 潜藏",
  traits: ["chocolate", "dark", "hidden"],
  visual: {
    liquidColor: "#3F2616",
    liquidOpacity: 0.96,
    cremaColor: "#A8835C",
    moodColor: "rgba(145, 120, 95, 0.36)",
    liquidHeight: "70%"
  }
},
{
  id: "el_salvador_pacamara",
  label: "萨尔瓦多帕卡玛拉",
  subtitle: "核果 / 绵长 / 释怀",
  traits: ["stonefruit", "lingering", "released"],
  visual: {
    liquidColor: "#854E2C",
    liquidOpacity: 0.84,
    cremaColor: "#D1A981",
    moodColor: "rgba(211, 182, 151, 0.27)",
    liquidHeight: "69%"
  }
},
{
  id: "indonesia_flores",
  label: "印尼弗洛勒斯",
  subtitle: "香料 / 斑驳 / 寻迹",
  traits: ["spice", "complex", "tracing"],
  visual: {
    liquidColor: "#5E371C",
    liquidOpacity: 0.93,
    cremaColor: "#B98D5C",
    moodColor: "rgba(172, 142, 115, 0.33)",
    liquidHeight: "74%"
  }
}

  ],

  /**
   * Step 2：萃取方式
   * 主要影响：杯型、高度、液面、是否出现 crema
   */
  methods: [
   {
  id: "pourover_v60",
  label: "手冲滤泡",
  subtitle: "通透 / 舒缓 / 等待",
  traits: ["clear", "slow", "patient"],
  visual: {
    cupWidth: "120px",
    cupHeight: "155px",
    cupShape: "glass",
    liquidHeight: "65%",
    liquidOpacity: 0.85,
    showCrema: false
  }
},
{
  id: "espresso_classic",
  label: "经典浓缩",
  subtitle: "醇厚 / 聚焦 / 凝神",
  traits: ["intense", "focused", "pure"],
  visual: {
    cupWidth: "85px",
    cupHeight: "75px",
    cupShape: "espresso",
    liquidHeight: "45%",
    liquidOpacity: 0.98,
    showCrema: true
  }
},
{
  id: "cold_brew_drip",
  label: "慢速冷萃",
  subtitle: "纯净 / 凛冽 / 沉淀",
  traits: ["clean", "cold", "settled"],
  visual: {
    cupWidth: "95px",
    cupHeight: "175px",
    cupShape: "tall",
    liquidHeight: "75%",
    liquidOpacity: 0.75,
    showCrema: false
  }
},
{
  id: "aeropress_push",
  label: "爱乐压",
  subtitle: "浑厚 / 随性 / 游荡",
  traits: ["full", "casual", "wandering"],
  visual: {
    cupWidth: "110px",
    cupHeight: "140px",
    cupShape: "glass",
    liquidHeight: "70%",
    liquidOpacity: 0.88,
    showCrema: false
  }
},
{
  id: "french_press",
  label: "法压浸泡",
  subtitle: "粗犷 / 质朴 / 还原",
  traits: ["rustic", "earthy", "raw"],
  visual: {
    cupWidth: "105px",
    cupHeight: "160px",
    cupShape: "tall",
    liquidHeight: "80%",
    liquidOpacity: 0.9,
    showCrema: true
  }
},
{
  id: "moka_pot",
  label: "摩卡壶",
  subtitle: "浓烈 / 炽热 / 唤醒",
  traits: ["strong", "hot", "awakening"],
  visual: {
    cupWidth: "90px",
    cupHeight: "85px",
    cupShape: "espresso",
    liquidHeight: "55%",
    liquidOpacity: 0.96,
    showCrema: true
  }
},
{
  id: "syphon_brew",
  label: "虹吸壶",
  subtitle: "圆润 / 仪式 / 敬畏",
  traits: ["smooth", "ritual", "awe"],
  visual: {
    cupWidth: "115px",
    cupHeight: "165px",
    cupShape: "glass",
    liquidHeight: "68%",
    liquidOpacity: 0.82,
    showCrema: false
  }
},
{
  id: "chemex_share",
  label: "经典分享壶",
  subtitle: "清澈 / 连结 / 对话",
  traits: ["transparent", "connected", "dialogue"],
  visual: {
    cupWidth: "130px",
    cupHeight: "150px",
    cupShape: "glass",
    liquidHeight: "60%",
    liquidOpacity: 0.78,
    showCrema: false
  }
},
{
  id: "ristretto_shot",
  label: "精萃浓缩",
  subtitle: "极简 / 克制 / 顿悟",
  traits: ["minimal", "restrained", "epiphany"],
  visual: {
    cupWidth: "80px",
    cupHeight: "70px",
    cupShape: "espresso",
    liquidHeight: "35%",
    liquidOpacity: 1.0,
    showCrema: true
  }
},
{
  id: "clever_dripper",
  label: "聪明杯",
  subtitle: "浸泡 / 宽容 / 自洽",
  traits: ["steeped", "tolerant", "content"],
  visual: {
    cupWidth: "118px",
    cupHeight: "148px",
    cupShape: "glass",
    liquidHeight: "72%",
    liquidOpacity: 0.86,
    showCrema: false
  }
}

  ],

  /**
   * Step 3：饮料基底
   * 主要影响：奶层、气泡、透明感、情绪光晕
   */
  bases: [
    {
      id: "water",
      label: "纯净温水",
      subtitle: "本真 / 清澈",
      traits: ["pure", "minimal"],
      visual: {
        showMilk: false,
        showBubbles: false,
        liquidOpacity: 0.78
      }
    },
    {
      id: "oat_milk",
      label: "燕麦奶",
      subtitle: "柔和 / 包裹",
      traits: ["soft", "safe", "grain"],
      visual: {
        showMilk: true,
        milkColor: "#E6D6BE",
        showBubbles: false,
        liquidOpacity: 0.9,
        moodColor: "rgba(226, 210, 187, 0.34)"
      }
    },
    {
      id: "coconut_water",
      label: "椰青水",
      subtitle: "清透 / 解脱",
      traits: ["fresh", "clean"],
      visual: {
        showMilk: false,
        showBubbles: false,
        liquidOpacity: 0.62,
        moodColor: "rgba(207, 218, 201, 0.30)"
      }
    },
    {
      id: "sparkling",
      label: "气泡水",
      subtitle: "轻盈 / 释放",
      traits: ["sparkling", "release", "fresh"],
      visual: {
        showMilk: false,
        showBubbles: true,
        liquidOpacity: 0.58,
        moodColor: "rgba(216, 223, 218, 0.34)"
      }
    }
  ],

  /**
   * Step 4：点睛风味
   * 主要影响：杯面点缀。
   *
   * 目前视觉引擎只支持：
   * - none：无点缀
   * - petals：花瓣 / 桂花类
   * - salt：盐粒类
   * - citrus：柑橘皮类
   *
   * 如需新增 rosemary、cocoa、vanilla 等，
   * 还需同步扩展 coffee-visual.js 与 builder.css。
   */
  accents: [
   {
  id: "blank_space",
  label: "留白",
  subtitle: "无饰 / 极简 / 空无",
  traits: ["minimal", "empty", "pure"],
  visual: {
    topping: "none"
  }
},
{
  id: "sea_salt_flake",
  label: "盐之花",
  subtitle: "微咸 / 对立 / 映衬",
  traits: ["salty", "contrast", "reflective"],
  visual: {
    topping: "salt"
  }
},
{
  id: "orange_zest",
  label: "鲜橙皮",
  subtitle: "明艳 / 破晓 / 欢愉",
  traits: ["bright", "dawn", "joy"],
  visual: {
    topping: "citrus"
  }
},
{
  id: "rose_petal_dry",
  label: "干枯玫瑰瓣",
  subtitle: "暗香 / 柔软 / 悲悯",
  traits: ["floral", "soft", "compassion"],
  visual: {
    topping: "petals"
  }
},
{
  id: "pure_intent",
  label: "本心",
  subtitle: "纯粹 / 去伪 / 真实",
  traits: ["truth", "unadorned", "honest"],
  visual: {
    topping: "none"
  }
},
{
  id: "lemon_peel",
  label: "青柠皮",
  subtitle: "酸涩 / 试探 / 锋芒",
  traits: ["sour", "probing", "sharp"],
  visual: {
    topping: "citrus"
  }
},
{
  id: "himalayan_pink_salt",
  label: "喜马拉雅粉盐",
  subtitle: "粗粝 / 矿物 / 触碰",
  traits: ["rough", "mineral", "touch"],
  visual: {
    topping: "salt"
  }
},
{
  id: "osmanthus_crush",
  label: "碎桂花",
  subtitle: "秋意 / 迟暮 / 念旧",
  traits: ["autumn", "fading", "nostalgia"],
  visual: {
    topping: "petals"
  }
},
{
  id: "grapefruit_zest",
  label: "西柚皮",
  subtitle: "苦底 / 挣扎 / 释然",
  traits: ["bitter", "struggle", "relief"],
  visual: {
    topping: "citrus"
  }
},
{
  id: "jasmine_flower",
  label: "白茉莉",
  subtitle: "淡雅 / 隐忍 / 忘忧",
  traits: ["elegant", "enduring", "forgetful"],
  visual: {
    topping: "petals"
  }
}

  ],

  /**
   * Step 5：温度状态
   * 主要影响：蒸汽、冰块、透明度
   */
  temperatures: [
   {
  id: "steaming_hot",
  label: "滚烫",
  subtitle: "炽热 / 沸腾 / 不息",
  traits: ["hot", "boiling", "relentless"],
  visual: {
    showSteam: true,
    showIce: false,
    liquidOpacity: 1.0
  }
},
{
  id: "warm_touch",
  label: "触温",
  subtitle: "温润 / 妥帖 / 和解",
  traits: ["warm", "gentle", "reconciled"],
  visual: {
    showSteam: true,
    showIce: false,
    liquidOpacity: 0.98
  }
},
{
  id: "room_temp_peace",
  label: "常温",
  subtitle: "平和 / 顺应 / 随缘",
  traits: ["ambient", "peaceful", "flow"],
  visual: {
    showSteam: false,
    showIce: false,
    liquidOpacity: 0.95
  }
},
{
  id: "cool_breeze",
  label: "微凉",
  subtitle: "初秋 / 退让 / 抽离",
  traits: ["cool", "retreat", "detached"],
  visual: {
    showSteam: false,
    showIce: false,
    liquidOpacity: 0.9
  }
},
{
  id: "iced_solid",
  label: "冰镇",
  subtitle: "冷冽 / 封存 / 距离",
  traits: ["cold", "sealed", "distant"],
  visual: {
    showSteam: false,
    showIce: true,
    liquidOpacity: 0.85
  }
},
{
  id: "body_temp_hug",
  label: "体温",
  subtitle: "共生 / 亲肤 / 陪伴",
  traits: ["body", "symbiotic", "companion"],
  visual: {
    showSteam: false,
    showIce: false,
    liquidOpacity: 0.96
  }
},
{
  id: "lukewarm_fade",
  label: "渐冷",
  subtitle: "流逝 / 叹息 / 遗忘",
  traits: ["fading", "sigh", "forgotten"],
  visual: {
    showSteam: false,
    showIce: false,
    liquidOpacity: 0.92
  }
},
{
  id: "chilled_quiet",
  label: "冷藏",
  subtitle: "收敛 / 屏息 / 沉默",
  traits: ["chilled", "breathless", "silent"],
  visual: {
    showSteam: false,
    showIce: false,
    liquidOpacity: 0.88
  }
},
{
  id: "extra_ice_sharp",
  label: "满冰",
  subtitle: "刺骨 / 清醒 / 决绝",
  traits: ["freezing", "awake", "resolute"],
  visual: {
    showSteam: false,
    showIce: true,
    liquidOpacity: 0.75
  }
},
{
  id: "warm_hug",
  label: "暖饮",
  subtitle: "和煦 / 驱寒 / 庇护",
  traits: ["warm", "protecting", "shelter"],
  visual: {
    showSteam: true,
    showIce: false,
    liquidOpacity: 1.0
  }
}
  ]
};

/**
 * =====================================================
 * 调配步骤配置
 * 不需要让其他 AI 修改。
 * =====================================================
 */
const steps = [
  {
    key: "beans",
    title: "选择今日豆子",
    desc: "先决定这杯咖啡的底色。明亮、沉稳，或柔和。"
  },
  {
    key: "methods",
    title: "选择萃取方式",
    desc: "不同的萃取，会改变咖啡的节奏与身体感。"
  },
  {
    key: "bases",
    title: "选择饮料基底",
    desc: "让咖啡与水、奶、气泡，发生一次安静的相遇。"
  },
  {
    key: "accents",
    title: "选择点睛风味",
    desc: "一点细微的风味，会决定今日情绪的尾音。"
  },
  {
    key: "temperatures",
    title: "选择温度状态",
    desc: "热饮像拥抱，冰饮像把窗打开。"
  }
];

/**
 * =====================================================
 * 用户本次调配的状态
 * app.js 会读取和更新这里的数据。
 * =====================================================
 */
const state = {
  currentStep: 0,
  selections: {
    beans: null,
    methods: null,
    bases: null,
    accents: null,
    temperatures: null
  }
};

/**
 * =====================================================
 * 动态咖啡视觉的默认配置
 * coffee-visual.js 会将用户选择的 visual 与此对象合并。
 * =====================================================
 */
const defaultVisual = {
  liquidColor: "#6B4634",
  liquidOpacity: 0.86,
  milkColor: "#E7D8C2",
  cremaColor: "#C9965A",

  cupWidth: "118px",
  cupHeight: "168px",
  liquidHeight: "68%",
  moodColor: "rgba(139, 94, 60, 0.16)",

  cupShape: "glass",
  showCrema: false,
  showMilk: false,
  showBubbles: false,
  showSteam: false,
  showIce: false,
  topping: "none"
};
