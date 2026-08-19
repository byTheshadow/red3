/**
 * 咖啡谏言 & 书籍推荐 数据库
 * 你可以把这个文件单独提供给其他 AI，让他们追加对象到 adviceData 数组中。
 */
const adviceData = [
  {
    id: "adv_001",
    theme_tag: "接纳与沉淀",
    coffee_name: "清晨的克制 · 桂花燕麦拿铁",
    flavor_notes: ["谷物香", "微甜", "柔和", "安定"],
    quote: "不必急于把生活填满，留白的地方，正好用来容纳晨光与偶然的风。",
    book_recommendation: {
      title: "《日日是好日》",
      author: "森下典子",
      reason: "在茶道与四季的微小起伏中，重新找回身体对时间的感知。"
    },
    // 匹配权重特征
    matched_traits: ["medium", "soft", "warm", "gentle", "calm", "grain"]
  },
  {
    id: "adv_002",
    theme_tag: "清醒与解脱",
    coffee_name: "清透的独处 · 橙皮冷萃美式",
    flavor_notes: ["柑橘酸", "清爽", "回甘", "明朗"],
    quote: "生活不必时时加糖，苦味本身，也是一种清醒的底色。",
    book_recommendation: {
      title: "《瓦尔登湖》",
      author: "亨利·戴维·梭罗",
      reason: "剥离掉繁复的修饰，去看看生活最原本、最硬朗的质地。"
    },
    matched_traits: ["light", "clear", "fresh", "cool", "awake", "citrus", "cold_brew"]
  },
  {
    id: "adv_003",
    theme_tag: "专注与内省",
    coffee_name: "深夜的凝视 · 深烘手冲曼特宁",
    flavor_notes: ["黑巧", "木质香", "醇厚", "余韵"],
    quote: "慢下来并不是停滞，而是在噪音中重新听清自己的呼吸。",
    book_recommendation: {
      title: "《深度的平静》",
      author: "瑞安·霍利迪",
      reason: "教你在不安的世界里找到心中的锚点，沉淀思想的杂质。"
    },
    matched_traits: ["dark", "bitter", "grounded", "slow", "pure", "hot", "minimal"]
  },
  {
    id: "adv_004",
    theme_tag: "跃动与新生",
    coffee_name: "夏日的灵光 · 气泡瑰夏特调",
    flavor_notes: ["花香", "气泡感", "轻盈", "灵动"],
    quote: "允许自己偶尔不安常理出牌，新的灵感往往诞生在跳跃的瞬间。",
    book_recommendation: {
      title: "《流动的盛宴》",
      author: "海明威",
      reason: "字里行间流淌着年轻人特有的敏锐、灵感与不可复制的情致。"
    },
    matched_traits: ["elegant", "sparkling", "release", "bright", "tea_like"]
  }
];
