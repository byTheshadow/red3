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
  },
  {
  id: "adv_005",
  theme_tag: "明净与专注",
  coffee_name: "窗边的白光 · 浅烘手冲",
  flavor_notes: ["白花香", "柑橘", "清甜", "轻盈"],
  quote: "把上午交给一杯清亮的咖啡，也交给一件尚未完成的小事；专心时，时间会变得很轻。",
  book_recommendation: {
    title: "《一个人的朝圣》",
    author: "蕾秋·乔伊斯",
    reason: "缓慢的行走将寻常日子重新照亮，适合在清醒的早晨读出内心真正想去的方向。"
  },
  matched_traits: ["light", "floral", "bright", "pure", "clear", "hot"]
},
{
  id: "adv_006",
  theme_tag: "沉稳与笃定",
  coffee_name: "炉火的低语 · 深烘摩卡壶",
  flavor_notes: ["黑巧克力", "焦糖", "坚果", "醇厚"],
  quote: "有些答案不在远处，而在反复煮沸的日常里；耐心等一等，香气会自己浮上来。",
  book_recommendation: {
    title: "《厨房》",
    author: "吉本芭娜娜",
    reason: "从食物、房间与失去中寻找安顿之处，文字温暖而节制，像夜里留着的一盏小灯。"
  },
  matched_traits: ["dark", "bitter", "grounded", "warm", "intense", "daily"]
},
{
  id: "adv_007",
  theme_tag: "轻盈与新意",
  coffee_name: "橙雾的跃动 · 瑰夏气泡冰咖",
  flavor_notes: ["橙皮", "茉莉花", "气泡", "明亮"],
  quote: "不妨让今天有一点轻微的偏离，像冰块碰到杯壁，清脆地提醒心还保有好奇。",
  book_recommendation: {
    title: "《夏日终曲》",
    author: "安德烈·艾席蒙",
    reason: "书中捕捉季节与感官的细微颤动，适合在明亮、跳跃的风味里延长夏日的感受。"
  },
  matched_traits: ["elegant", "floral", "sparkling", "bright", "cool", "release", "cold"]
},
{
  id: "adv_008",
  theme_tag: "柔和与丰盈",
  coffee_name: "秋灯的余温 · 桂花燕麦咖啡",
  flavor_notes: ["桂花", "燕麦", "奶香", "回甘"],
  quote: "忙碌不必被全部推开，给它添一点柔软的香气，心便能在来往之间慢慢松开。",
  book_recommendation: {
    title: "《山茶文具店》",
    author: "小川糸",
    reason: "一封封书信与小镇日常交织成温和的陪伴，适合配着带花香的咖啡慢慢翻阅。"
  },
  matched_traits: ["medium", "balanced", "soft", "warm", "autumn", "gentle", "grain"]
},
{
  id: "adv_009",
  theme_tag: "清凉与留白",
  coffee_name: "风穿过杯沿 · 椰青冷萃",
  flavor_notes: ["椰子水", "果酸", "清凉", "甘甜"],
  quote: "把不需要立刻回答的问题，先放进一段清凉里。空出来的心，也能看见新的水面。",
  book_recommendation: {
    title: "《海风中失落的血色馈赠》",
    author: "阿利斯泰尔·麦克劳德",
    reason: "辽阔的海岸、家族与记忆在文字中缓缓回响，适合安静感受人与自然之间的距离。"
  },
  matched_traits: ["cold_brew", "smooth", "fresh", "clean", "cool", "light", "cold"]
},
{
  id: "adv_010",
  theme_tag: "朴素与安心",
  coffee_name: "盐粒与火光 · 海盐黑咖啡",
  flavor_notes: ["海盐", "可可", "焦糖", "浓郁"],
  quote: "苦味被一点盐轻轻托住，日子也是如此：不必完美，略有棱角反而让人记得真实。",
  book_recommendation: {
    title: "《斯通纳》",
    author: "约翰·威廉斯",
    reason: "它以克制目光书写平凡人生的尊严，适合在浓厚风味中体会安静坚持的重量。"
  },
  matched_traits: ["dark", "bitter", "grounded", "hot", "direct", "stable"]
},
{
  id: "adv_011",
  theme_tag: "边界与温柔",
  coffee_name: "午后的分寸 · 榛果拿铁",
  flavor_notes: ["榛果", "牛奶", "焦糖", "圆润"],
  quote: "照顾别人时，也给自己留一把椅子。温柔不是退让，而是知道心该停在哪里休息。",
  book_recommendation: {
    title: "《简·爱》",
    author: "夏洛蒂·勃朗特",
    reason: "简的清醒与自尊始终不失温度，适合在柔和的午后，重读关于选择与边界的勇气。"
  },
  matched_traits: ["medium", "nutty", "balanced", "soft", "warm", "safe", "comfort"]
},
{
  id: "adv_012",
  theme_tag: "安静与抵达",
  coffee_name: "雾中的石阶 · 茶感耶加雪菲",
  flavor_notes: ["伯爵茶", "柠檬", "白桃", "花蜜"],
  quote: "脚步不必总朝着喧闹处去，沿一段安静的石阶往下走，也许正好抵达自己的心。",
  book_recommendation: {
    title: "《悉达多》",
    author: "赫尔曼·黑塞",
    reason: "一场向内的漫游不急着给出结论，适合与茶感咖啡同饮，感受缓慢领悟的过程。"
  },
  matched_traits: ["elegant", "tea_like", "floral", "complex", "clear", "calm"]
},
{
  id: "adv_013",
  theme_tag: "日常与珍重",
  coffee_name: "洗净的清晨 · 美式咖啡",
  flavor_notes: ["烤面包", "坚果", "微苦", "干净"],
  quote: "重复的清晨并不单调，每一次端起杯子，都是在对平常生活说一声：我还在这里。",
  book_recommendation: {
    title: "《人间值得》",
    author: "中村恒子",
    reason: "从漫长的医生生涯中提炼出朴素目光，提醒人们将心力放回眼前能好好完成的事情。"
  },
  matched_traits: ["medium", "balanced", "daily", "clean", "awake", "stable"]
},
{
  id: "adv_014",
  theme_tag: "缓慢与生长",
  coffee_name: "山谷的回声 · 慢萃冰滴",
  flavor_notes: ["浆果", "可可", "发酵感", "绵长"],
  quote: "有些变化看不见声响，像水一滴滴穿过咖啡粉；等回头时，已经多了一份深沉的香。",
  book_recommendation: {
    title: "《种子的信仰》",
    author: "亨利·戴维·梭罗",
    reason: "从种子与季节出发，观看生命隐秘而坚定的力量，适合陪伴需要耐心的等待时刻。"
  },
  matched_traits: ["cold_brew", "slow", "patient", "complex", "smooth", "grounded"]
},
{
  id: "adv_015",
  theme_tag: "醒悟与松弛",
  coffee_name: "薄荷色天光 · 柠檬冷美式",
  flavor_notes: ["柠檬", "青草", "清苦", "爽朗"],
  quote: "清醒并非把自己绷紧，而是辨认出哪些念头只是路过，让风带走它们就好。",
  book_recommendation: {
    title: "《禅与摩托车维修艺术》",
    author: "罗伯特·M. 波西格",
    reason: "它在旅途与思考之间探问何为“良质”，适合思绪繁多时，慢慢整理内在的秩序。"
  },
  matched_traits: ["fresh", "clean", "citrus", "awake", "cool", "clear", "cold"]
},
{
  id: "adv_016",
  theme_tag: "独处与自在",
  coffee_name: "月下的黑森林 · 单品浓缩",
  flavor_notes: ["黑莓", "黑巧克力", "烟熏", "浓烈"],
  quote: "独处不是把门关紧，而是让心里的房间透一会儿气，听见那些平日被忽略的声音。",
  book_recommendation: {
    title: "《一个人住第几年？》",
    author: "高木直子",
    reason: "以轻松坦诚的笔触记录独居生活，让一个人的日常显得具体、可爱，也足够自在。"
  },
  matched_traits: ["dark", "intense", "direct", "complex", "grounded", "calm"]
},
{
  id: "adv_017",
  theme_tag: "明朗与呼吸",
  coffee_name: "晴空的果园 · 水洗肯尼亚",
  flavor_notes: ["黑加仑", "葡萄柚", "糖浆", "明快"],
  quote: "心里若有一点闷，不必急着解释。先把窗打开，让一阵新鲜的光替你说话。",
  book_recommendation: {
    title: "《鸟鸣》",
    author: "塞巴斯蒂安·福克斯",
    reason: "故事将人与时代的伤痕放入辽阔自然中凝望，提醒人仍可从细微生命里获得呼吸。"
  },
  matched_traits: ["light", "bright", "citrus", "fresh", "clean", "awake"]
},
{
  id: "adv_018",
  theme_tag: "克制与丰沛",
  coffee_name: "陶杯里的暮色 · 巴西坚果咖啡",
  flavor_notes: ["杏仁", "太妃糖", "可可", "顺滑"],
  quote: "不必把所有心意都说得响亮，像杯底沉着的坚果香，安静也自有丰沛的证明。",
  book_recommendation: {
    title: "《我与地坛》",
    author: "史铁生",
    reason: "文字在静观中触及生命深处的韧性，适合与醇厚咖啡相伴，留出不被催促的思考。"
  },
  matched_traits: ["medium", "nutty", "smooth", "restrained", "warm", "grounded"]
},
{
  id: "adv_019",
  theme_tag: "松弛与相遇",
  coffee_name: "街角的雨伞 · 拿铁咖啡",
  flavor_notes: ["牛奶", "焦糖", "咖啡香", "柔滑"],
  quote: "偶然的相遇不必急着命名，像雨天借来的一把伞，同行一段，已经足够温暖。",
  book_recommendation: {
    title: "《挪威的森林》",
    author: "村上春树",
    reason: "小说以克制的节奏书写青春里的靠近与告别，适合在阴雨午后安静读上几页。"
  },
  matched_traits: ["medium", "balanced", "soft", "warm", "gentle", "comfort"]
},
{
  id: "adv_020",
  theme_tag: "自由与清澈",
  coffee_name: "海岸线以北 · 冰摇美式",
  flavor_notes: ["矿物感", "柑橘", "清苦", "冰凉"],
  quote: "把心放到更开阔的地方，许多原本拥挤的念头，会像退潮后的沙面一样渐渐平整。",
  book_recommendation: {
    title: "《海鸥乔纳森》",
    author: "理查德·巴赫",
    reason: "借一只海鸥的飞行写对自由与精进的向往，篇幅轻盈，适合在炎热时带来开阔感。"
  },
  matched_traits: ["cold", "cool", "clear", "fresh", "release", "direct"]
},
{
  id: "adv_021",
  theme_tag: "怀旧与安放",
  coffee_name: "旧唱片的沙沙声 · 复古摩卡",
  flavor_notes: ["可可", "肉桂", "牛奶", "甜香"],
  quote: "旧日子不必被反复打磨成遗憾，它们像唱片里的细小杂音，使此刻的旋律更有温度。",
  book_recommendation: {
    title: "《追忆似水年华》",
    author: "马塞尔·普鲁斯特",
    reason: "从味觉与记忆的微小触发进入漫长时光，适合在复古香气里体会记忆如何回到眼前。"
  },
  matched_traits: ["medium", "retro", "warm", "soft", "layered", "comfort"]
},
{
  id: "adv_022",
  theme_tag: "清简与归心",
  coffee_name: "白瓷的微光 · 纯黑手冲",
  flavor_notes: ["柑橘", "红茶", "蜂蜜", "清澈"],
  quote: "删去几件不必要的事，不是为了显得轻盈，而是让真正想珍惜的东西有地方落下。",
  book_recommendation: {
    title: "《断舍离》",
    author: "山下英子",
    reason: "从物品关系延伸到生活选择，帮助人辨认真正需要留下的部分，读来清爽而实际。"
  },
  matched_traits: ["pure", "minimal", "light", "clear", "tea_like", "hot"]
},
{
  id: "adv_023",
  theme_tag: "冬日与慰藉",
  coffee_name: "雪落之前 · 肉桂澳白",
  flavor_notes: ["肉桂", "奶油", "坚果", "温暖"],
  quote: "天气变冷的时候，允许自己把步子放小一些。抵达不只发生在远方，也发生在一口热气里。",
  book_recommendation: {
    title: "《小森林》",
    author: "五十岚大介",
    reason: "四季、食物与独居生活构成朴实的治愈感，适合在寒冷日子里重拾照料自己的兴趣。"
  },
  matched_traits: ["warm", "soft", "nutty", "comfort", "safe", "calm"]
},
{
  id: "adv_024",
  theme_tag: "勇气与微光",
  coffee_name: "暗处的火种 · 深烘朗姆咖啡",
  flavor_notes: ["朗姆酒香", "黑糖", "可可", "浓厚"],
  quote: "害怕的时候，不必假装无畏。守住心里那一点尚未熄灭的光，下一步便有了方向。",
  book_recommendation: {
    title: "《长日将尽》",
    author: "石黑一雄",
    reason: "在压抑而精确的叙述中，人物慢慢触及未曾说出的心意，适合品味克制背后的微光。"
  },
  matched_traits: ["dark", "bitter", "intense", "warm", "layered", "grounded"]
},
{
  id: "adv_025",
  theme_tag: "自然与复苏",
  coffee_name: "春水初融 · 蜜处理手冲",
  flavor_notes: ["黄桃", "蜂蜜", "花香", "圆润"],
  quote: "季节总会用很小的方式归来：一缕花香，一点甜味，一颗忽然愿意重新出发的心。",
  book_recommendation: {
    title: "《寂静的春天》",
    author: "蕾切尔·卡森",
    reason: "它以敏锐而优美的文字凝视自然生态，适合在春日风味中重新感受万物之间的关联。"
  },
  matched_traits: ["light", "floral", "bright", "gentle", "fresh", "smooth"]
},
{
  id: "adv_026",
  theme_tag: "耐心与回甘",
  coffee_name: "远山的迟到 · 陈年曼特宁",
  flavor_notes: ["木质", "香料", "黑糖", "回甘"],
  quote: "不是每一段等待都空无一物，时间会在看不见的地方，替心意慢慢酿出更深的回味。",
  book_recommendation: {
    title: "《百年孤独》",
    author: "加西亚·马尔克斯",
    reason: "家族与岁月在循环中层层积淀，宏阔又细密，适合配合复杂深沉的风味缓缓阅读。"
  },
  matched_traits: ["dark", "complex", "slow", "patient", "grounded", "layered"]
},
{
  id: "adv_027",
  theme_tag: "平衡与从容",
  coffee_name: "两岸之间 · 双拼拼配咖啡",
  flavor_notes: ["焦糖", "红苹果", "坚果", "均衡"],
  quote: "不必把每个选择都分成对错，有时只是两种心意并肩存在，便让生活有了恰好的层次。",
  book_recommendation: {
    title: "《不完美的勇气》",
    author: "岸见一郎、古贺史健",
    reason: "以对话形式讨论课题分离与自我接纳，适合在需要理清关系与选择时平静地阅读。"
  },
  matched_traits: ["medium", "balanced", "nutty", "stable", "daily", "layered"]
},
{
  id: "adv_028",
  theme_tag: "夜色与想象",
  coffee_name: "星群的背面 · 冰博克咖啡",
  flavor_notes: ["奶油", "莓果", "黑巧", "浓甜"],
  quote: "夜晚不只用来结束一天，也适合收留那些白日来不及展开的想象，让它们慢慢发亮。",
  book_recommendation: {
    title: "《夜航西飞》",
    author: "柏瑞尔·马卡姆",
    reason: "飞行、草原与冒险在回忆中呈现出辽阔质地，适合在夜里唤醒一点不受拘束的想象。"
  },
  matched_traits: ["cold", "smooth", "complex", "intense", "retro", "layered"]
},
{
  id: "adv_029",
  theme_tag: "清醒与善待",
  coffee_name: "醒来的树影 · 汤力冷萃",
  flavor_notes: ["奎宁", "柚子", "花香", "清冽"],
  quote: "清醒之后，也别忘了善待自己。看清现实并不妨碍保留柔软，二者可以在同一颗心里共处。",
  book_recommendation: {
    title: "《局外人》",
    author: "阿尔贝·加缪",
    reason: "简洁冷静的叙述迫使人重新审视习以为常的判断，适合在清冽风味中进行片刻反思。"
  },
  matched_traits: ["cold_brew", "sparkling", "fresh", "clear", "awake", "elegant", "cool"]
},
{
  id: "adv_030",
  theme_tag: "丰收与感念",
  coffee_name: "谷仓的金色下午 · 麦芽咖啡",
  flavor_notes: ["麦芽", "榛子", "焦糖", "醇甜"],
  quote: "当日光慢慢倾斜，不妨数一数已经拥有的事物；感念不是停步，而是带着满足继续前行。",
  book_recommendation: {
    title: "《托斯卡纳艳阳下》",
    author: "弗朗西斯·梅耶斯",
    reason: "从修复一所旧宅到融入土地与四季，展现生活美学如何从细小劳动中自然生长。"
  },
  matched_traits: ["medium", "grain", "nutty", "warm", "autumn", "daily", "comfort"]
},
{
  id: "adv_031",
  theme_tag: "自由与远方",
  coffee_name: "北风的信笺 · 冰手冲咖啡",
  flavor_notes: ["佛手柑", "白葡萄", "茶感", "清亮"],
  quote: "远方未必是一张车票，也可以是一种看待眼前的方式：把熟悉的路，重新走得宽一些。",
  book_recommendation: {
    title: "《旅行的艺术》",
    author: "阿兰·德波顿",
    reason: "它将旅行中的期待、观看与失望化为细致思考，适合在轻盈风味里更新对日常风景的感受。"
  },
  matched_traits: ["light", "tea_like", "bright", "clear", "cool", "release", "cold"]
},
{
  id: "adv_032",
  theme_tag: "静观与和解",
  coffee_name: "雨声缓慢 · 深烘热美式",
  flavor_notes: ["可可", "杉木", "焦糖", "微苦"],
  quote: "雨没有催促屋檐，也没有解释去向。学着和暂时无解的事坐一会儿，心会渐渐安静。",
  book_recommendation: {
    title: "《当呼吸化为空气》",
    author: "保罗·卡拉尼什",
    reason: "作者以清醒而真诚的目光面对生命有限，帮助人们在脆弱之中重新辨认何为珍贵。"
  },
  matched_traits: ["dark", "bitter", "hot", "slow", "calm", "restrained", "grounded"]
},
{
  id: "adv_033",
  theme_tag: "灵感与漫游",
  coffee_name: "纸上花园 · 日晒埃塞俄比亚",
  flavor_notes: ["草莓", "玫瑰", "果酱", "奔放"],
  quote: "灵感不总在端正的桌面上出现，带着一点漫游的心情，陌生的岔路也会送来花朵。",
  book_recommendation: {
    title: "《巴黎评论·作家访谈》",
    author: "《巴黎评论》编辑部",
    reason: "不同作家谈论阅读、写作与生活习惯，适合在果香明艳的咖啡旁，收集创作的细小火花。"
  },
  matched_traits: ["light", "floral", "bright", "complex", "release", "elegant"]
},
{
  id: "adv_034",
  theme_tag: "归属与平静",
  coffee_name: "灯火可亲 · 热牛奶咖啡",
  flavor_notes: ["牛奶", "可可", "香草", "柔顺"],
  quote: "一天的尽头，不需要再证明什么。把杯子握稳，把灯留亮，平静本身就是很好的归处。",
  book_recommendation: {
    title: "《清单人生》",
    author: "弗雷德里克·巴克曼",
    reason: "一位固执老人和社区邻居的相遇，慢慢显出人与人之间朴素而可靠的善意。"
  },
  matched_traits: ["soft", "warm", "safe", "comfort", "calm", "daily"]
},
{
  id: "adv_035",
  theme_tag: "澄明与耐心",
  coffee_name: "晨雾散开 · 浅烘手冲咖啡",
  flavor_notes: ["白花", "柑橘", "蜂蜜", "清甜"],
  quote: "水流经过细密的粉层，像晨光经过窗纱。许多事情不必催促，清楚会在等待里慢慢显形。",
  book_recommendation: {
    title: "《庭院深深》",
    author: "卡雷尔·恰佩克",
    reason: "从一方小小庭院观察植物、天气与心绪，文字有细微的幽默，也有安静生活的耐心。"
  },
  matched_traits: ["light", "floral", "clear", "slow", "patient", "pure", "hot"]
},
{
  id: "adv_036",
  theme_tag: "炽热与安定",
  coffee_name: "炉边的影子 · 深烘摩卡咖啡",
  flavor_notes: ["黑巧克力", "烟熏", "焦糖", "厚实"],
  quote: "火焰把水推向沸腾，杯中的苦香却慢慢安静下来。热烈与平稳，原来也能坐在同一张桌前。",
  book_recommendation: {
    title: "《烧火工》",
    author: "杰克·伦敦",
    reason: "寒冷荒野中的行动与抉择，让人感受到身体、火焰和意志之间朴素而直接的关系。"
  },
  matched_traits: ["dark", "intense", "hot", "grounded", "stable", "smoky", "strong"]
},
{
  id: "adv_037",
  theme_tag: "轻快与发现",
  coffee_name: "冰原的橙光 · 瑰夏气泡冷饮",
  flavor_notes: ["橙皮", "茉莉", "气泡", "葡萄柚"],
  quote: "冰块沉入杯底时，空气忽然有了清脆的边缘。今天适合留意那些不经意出现的小小欢喜。",
  book_recommendation: {
    title: "《夏天、烟火和我的尸体》",
    author: "乙一",
    reason: "作品带着轻盈而奇异的想象力，适合搭配明亮跳跃的风味，打开对寻常事物的新视角。"
  },
  matched_traits: ["floral", "elegant", "sparkling", "fresh", "bright", "cold", "release"]
},
{
  id: "adv_038",
  theme_tag: "丰润与自洽",
  coffee_name: "金秋的软风 · 燕麦桂花拿铁",
  flavor_notes: ["桂花", "燕麦", "奶香", "麦芽"],
  quote: "花香落在温热的杯面，提醒人不必把自己修剪得太整齐。保留一点丰润，也是一种从容。",
  book_recommendation: {
    title: "《京都一年》",
    author: "林聪美",
    reason: "书写京都四季中的饮食、器物与日常步调，适合在温润谷物香里感受生活的细小秩序。"
  },
  matched_traits: ["medium", "balanced", "soft", "warm", "grain", "autumn", "gentle"]
},
{
  id: "adv_039",
  theme_tag: "清凉与松开",
  coffee_name: "海风停泊 · 椰青冷萃",
  flavor_notes: ["椰子水", "青柠", "果酸", "清凉"],
  quote: "把肩上那些暂时无须承担的重量，交给一阵凉风。空出来的地方，正好可以盛下远处的海声。",
  book_recommendation: {
    title: "《蓝色海岸》",
    author: "J. M. G. 勒克莱齐奥",
    reason: "以敏感的目光描摹海岸、阳光与少年心事，适合在清凉风味中感受世界辽阔而洁净的一面。"
  },
  matched_traits: ["cold_brew", "fresh", "clean", "smooth", "cool", "cold", "release"]
},
{
  id: "adv_040",
  theme_tag: "棱角与真实",
  coffee_name: "潮汐的盐粒 · 海盐深烘美式",
  flavor_notes: ["海盐", "可可", "烘烤", "微苦"],
  quote: "盐让苦味有了轮廓，也让回甘更显得真切。那些不够圆满的部分，或许正是生活的质地。",
  book_recommendation: {
    title: "《盐之路》",
    author: "雷诺·温恩",
    reason: "一段沿海徒步之旅，写下失去之后与土地重新建立联系的过程，坚韧而不失温度。"
  },
  matched_traits: ["dark", "bitter", "hot", "direct", "grounded", "salty", "reflective"]
},
{
  id: "adv_041",
  theme_tag: "静默与体察",
  coffee_name: "茶室的微雨 · 耶加雪菲虹吸",
  flavor_notes: ["红茶", "柠檬", "白桃", "花蜜"],
  quote: "雨声落在玻璃壶外，香气在壶中缓慢聚拢。安静不是空白，而是感受开始变得细致的时候。",
  book_recommendation: {
    title: "《枕草子》",
    author: "清少纳言",
    reason: "对四季、光影与日常趣味的敏锐记录，适合在茶感清雅的咖啡旁，练习观看微小事物。"
  },
  matched_traits: ["tea", "tea_like", "elegant", "smooth", "ritual", "calm", "complex"]
},
{
  id: "adv_042",
  theme_tag: "朴实与依靠",
  coffee_name: "木桌的午后 · 巴西法压咖啡",
  flavor_notes: ["榛果", "可可", "烤面包", "醇厚"],
  quote: "木桌留下的划痕不妨碍一顿好饭，生活也不必时时焕然如新。可依靠的寻常，已经很珍贵。",
  book_recommendation: {
    title: "《雅舍小品》",
    author: "梁实秋",
    reason: "从饮食、居处与人情中发现日常趣味，笔调轻松温厚，适合与坚果调性的咖啡相伴。"
  },
  matched_traits: ["nutty", "mild", "supportive", "rustic", "earthy", "raw", "warm"]
},
{
  id: "adv_043",
  theme_tag: "坦然与留白",
  coffee_name: "白纸的呼吸 · 纯净聪明杯",
  flavor_notes: ["柑橘", "蜂蜜", "清茶", "干净"],
  quote: "纸上未写的地方，并非等待填满。它们让一句话能够呼吸，也让心里的声音有机会慢慢靠近。",
  book_recommendation: {
    title: "《留白》",
    author: "蒋勋",
    reason: "从艺术与生活谈留白的意义，邀请读者放慢观看的速度，重新辨认繁复之外的安静。"
  },
  matched_traits: ["pure", "minimal", "clear", "clean", "steeped", "tolerant", "content"]
},
{
  id: "adv_044",
  theme_tag: "果敢与清醒",
  coffee_name: "短暂的闪电 · 精萃浓缩",
  flavor_notes: ["黑巧", "红糖", "莓果", "浓烈"],
  quote: "短促的一口，也能照见很深的地方。把注意力收回来，眼前这一刻便有了足够明亮的力量。",
  book_recommendation: {
    title: "《沉思录》",
    author: "马可·奥勒留",
    reason: "文字简洁而内敛，围绕心念、行动与自省展开，适合在浓缩咖啡般集中的时刻缓慢阅读。"
  },
  matched_traits: ["intense", "focused", "pure", "minimal", "restrained", "epiphany", "direct"]
},
{
  id: "adv_045",
  theme_tag: "回望与归乡",
  coffee_name: "旧城的茶烟 · 云南水洗手冲",
  flavor_notes: ["红茶", "熟果", "木质", "甘甜"],
  quote: "有些熟悉的气味会把人带回很远的地方。回望不是停在过去，而是带着来处继续向前走。",
  book_recommendation: {
    title: "《呼兰河传》",
    author: "萧红",
    reason: "以朴素又鲜活的笔触保存故乡人物与四季景象，适合在茶香与木质调中慢慢重读。"
  },
  matched_traits: ["tea", "earthy", "nostalgic", "clear", "slow", "patient", "warm"]
},
{
  id: "adv_046",
  theme_tag: "温润与修复",
  coffee_name: "蜜色屋檐 · 塔拉珠爱乐压",
  flavor_notes: ["果脯", "蜂蜜", "焦糖", "圆润"],
  quote: "不必急着把裂缝藏起来，阳光经过那里时，也会留下不同的颜色。缓慢修复，本身已有温度。",
  book_recommendation: {
    title: "《修复活着的水》",
    author: "陈传兴",
    reason: "以细腻目光进入土地、记忆与人情，适合在温甜果香的陪伴下，感受修复如何发生于日常。"
  },
  matched_traits: ["fruity", "sweet", "gentle", "full", "casual", "wandering", "smooth"]
},
{
  id: "adv_047",
  theme_tag: "岩石与笃定",
  coffee_name: "火山的夜航 · 安提瓜摩卡壶",
  flavor_notes: ["烟熏", "黑糖", "香料", "浓醇"],
  quote: "山石并不急着回应风雨，却在长久站立中有了自己的形状。沉稳不是沉默，而是内里有根。",
  book_recommendation: {
    title: "《山之四季》",
    author: "高村光太郎",
    reason: "以山居生活连接自然、劳动与精神世界，文字质朴有力，适合与烟熏深烘风味一同品读。"
  },
  matched_traits: ["smoky", "stable", "firm", "strong", "hot", "dark", "grounded"]
},
{
  id: "adv_048",
  theme_tag: "鲜明与呼吸",
  coffee_name: "红果初醒 · 肯尼亚冰手冲",
  flavor_notes: ["黑加仑", "番茄", "葡萄柚", "糖浆"],
  quote: "酸甜在舌尖轻轻醒来，像早晨草叶上的露水。新的一天不需宏大开场，呼吸清新便已足够。",
  book_recommendation: {
    title: "《夏日走过山间》",
    author: "雷切尔·卡森",
    reason: "收录对山林、海岸与季节的温柔观察，适合在果酸明亮的杯中，恢复与自然相连的感受。"
  },
  matched_traits: ["tomato", "bright", "vibrant", "clear", "cold", "fresh", "awake"]
},
{
  id: "adv_049",
  theme_tag: "暗香与悲悯",
  coffee_name: "褪色的花瓣 · 玫瑰冷萃",
  flavor_notes: ["玫瑰", "莓果", "可可", "柔酸"],
  quote: "花瓣干枯后仍留下一点香气。那些曾经认真爱过、认真告别过的时刻，也值得被轻轻安放。",
  book_recommendation: {
    title: "《花未眠》",
    author: "川端康成",
    reason: "短篇散文从花、器物与瞬间感受出发，文字轻而深，适合在微凉花香中细细停留。"
  },
  matched_traits: ["cold_brew", "floral", "soft", "compassion", "complex", "cool", "lingering"]
},
{
  id: "adv_050",
  theme_tag: "开阔与连结",
  coffee_name: "长桌的晴天 · 分享壶咖啡",
  flavor_notes: ["红苹果", "焦糖", "花香", "清澈"],
  quote: "一壶咖啡分到几只杯子里，香气反而更远。人与人之间恰好的靠近，也许就是不互相遮住光。",
  book_recommendation: {
    title: "《人类群星闪耀时》",
    author: "斯蒂芬·茨威格",
    reason: "书中描绘历史里人与人相遇、抉择的瞬间，适合在分享一壶咖啡时谈论命运与偶然。"
  },
  matched_traits: ["transparent", "connected", "dialogue", "balanced", "bright", "floral", "clear"]
},
{
  id: "adv_051",
  theme_tag: "野性与漫游",
  coffee_name: "荒原的口袋 · 法压弗洛勒斯",
  flavor_notes: ["丁香", "木质", "黑巧", "香料"],
  quote: "地图之外也有路径，只是没有被画得那么整齐。带着一点不确定出发，脚下的土会慢慢说话。",
  book_recommendation: {
    title: "《荒野之歌》",
    author: "玛丽·奥利弗",
    reason: "诗句常从动物、树林与水边出发，带人回到自然的直接感受，适合搭配粗粝深沉的香料调。"
  },
  matched_traits: ["spice", "complex", "tracing", "rustic", "earthy", "raw", "wandering"]
},
{
  id: "adv_052",
  theme_tag: "明艳与释然",
  coffee_name: "果核的回声 · 帕卡玛拉气泡咖啡",
  flavor_notes: ["黄桃", "杏子", "柑橘", "气泡"],
  quote: "果实落下以后，枝头仍会迎来新的风。放下一些已经完成的事，心便有余地迎接下一次明亮。",
  book_recommendation: {
    title: "《岁月的泡沫》",
    author: "鲍里斯·维昂",
    reason: "奇异的想象与轻快的节奏交织，适合搭配跳跃的果香气泡感，在荒诞中保留一份轻盈。"
  },
  matched_traits: ["stonefruit", "lingering", "released", "sparkling", "release", "fresh", "bright"]
},
{
  id: "adv_053",
  theme_tag: "简净与本心",
  coffee_name: "无饰的早晨 · 清水美式",
  flavor_notes: ["柑橘", "麦芽", "微苦", "清澈"],
  quote: "没有点缀的杯面，也有完整的风景。把不属于自己的声音暂时放远，本心便会显得清楚一些。",
  book_recommendation: {
    title: "《山月记》",
    author: "中岛敦",
    reason: "篇章短而锋利，触及才华、自尊与自我认知，适合在极简清苦的风味中静静思量。"
  },
  matched_traits: ["pure", "minimal", "empty", "truth", "unadorned", "honest", "clear"]
},
{
  id: "adv_054",
  theme_tag: "锋芒与试探",
  coffee_name: "青柠的边界 · 冷萃美式",
  flavor_notes: ["青柠", "青草", "柚子", "清苦"],
  quote: "一点酸涩让味道醒过来，也提醒人保留自己的边界。坦诚不必尖锐，清楚便已足够有力。",
  book_recommendation: {
    title: "《月亮与六便士》",
    author: "威廉·萨默塞特·毛姆",
    reason: "借一位画家的选择讨论欲望、自由与代价，适合在带有锋芒的清冽风味中辨认自己的方向。"
  },
  matched_traits: ["cold_brew", "sour", "probing", "sharp", "clear", "awake", "cool"]
},
{
  id: "adv_055",
  theme_tag: "矿物与触觉",
  coffee_name: "粉盐的岩层 · 深烘浓缩",
  flavor_notes: ["粉盐", "黑可可", "矿物感", "焦糖"],
  quote: "掌心触到粗粝的盐粒，才知道感受并不总是柔软。真实的生活有纹路，也有可以握住的重量。",
  book_recommendation: {
    title: "《石头记》",
    author: "贾平凹",
    reason: "小说以土地、人物与命运构成厚重纹理，适合在矿物感与深烘苦甜交错时缓缓进入。"
  },
  matched_traits: ["rough", "mineral", "touch", "dark", "intense", "direct", "grounded"]
},
{
  id: "adv_056",
  theme_tag: "秋意与记忆",
  coffee_name: "金桂旧信 · 桂花冷咖啡",
  flavor_notes: ["桂花", "红茶", "焦糖", "微凉"],
  quote: "秋风把旧信里的字吹得更轻，却没有吹散其中的心意。记得一些人，也不妨继续把日子过新。",
  book_recommendation: {
    title: "《秋园》",
    author: "杨本芬",
    reason: "一位普通女性穿过时代与家庭的生命历程，被书写得平静坚实，适合在秋日香气中感受记忆的温度。"
  },
  matched_traits: ["autumn", "fading", "nostalgia", "tea", "retro", "cool", "layered"]
},
{
  id: "adv_057",
  theme_tag: "苦尽与舒展",
  coffee_name: "西柚的转身 · 气泡冷萃",
  flavor_notes: ["西柚", "奎宁", "花香", "气泡"],
  quote: "苦味不急着离开，回甘已经在后面等候。把难言的部分走过去，心里或许会多出一片开阔。",
  book_recommendation: {
    title: "《也许你该找个人聊聊》",
    author: "洛莉·戈特利布",
    reason: "透过咨询室中的故事呈现脆弱、改变与理解，适合在苦甜交替的风味中温和地照看内心。"
  },
  matched_traits: ["bitter", "struggle", "relief", "sparkling", "fresh", "release", "cold"]
},
{
  id: "adv_058",
  theme_tag: "雅致与忍耐",
  coffee_name: "茉莉的暗面 · 瑰夏冰滴",
  flavor_notes: ["茉莉", "佛手柑", "白桃", "茶感"],
  quote: "花香并不急于占满房间，它只在风经过时留下痕迹。克制的心意，也能拥有很长的余韵。",
  book_recommendation: {
    title: "《细雪》",
    author: "谷崎润一郎",
    reason: "以四姐妹的生活与季节流转描画幽微情感，节奏从容细腻，适合在优雅茶感中慢慢阅读。"
  },
  matched_traits: ["floral", "elegant", "enduring", "forgetful", "tea_like", "cold_brew", "complex"]
},
{
  id: "adv_059",
  theme_tag: "晨光与欢愉",
  coffee_name: "橙皮破晓 · 肯尼亚冰美式",
  flavor_notes: ["鲜橙", "黑加仑", "柑橘", "明亮"],
  quote: "橙皮落入杯中，像给早晨划开一道小口。光不必铺满整天，先照亮眼前这一段路就很好。",
  book_recommendation: {
    title: "《太阳和她的花》",
    author: "露比·考尔",
    reason: "短诗围绕失落、修复与成长展开，篇幅轻巧，适合在清亮果香中随手翻开几页。"
  },
  matched_traits: ["bright", "dawn", "joy", "citrus", "awake", "fresh", "cold"]
},
{
  id: "adv_060",
  theme_tag: "深处与自省",
  coffee_name: "黑夜的植物 · 曼特宁爱乐压",
  flavor_notes: ["草本", "黑巧", "雪松", "香料"],
  quote: "深色的杯底并不拒绝光，它只是把光收得更稳。向内看一会儿，许多杂乱会慢慢沉下来。",
  book_recommendation: {
    title: "《一间自己的房间》",
    author: "弗吉尼亚·伍尔夫",
    reason: "从空间、写作与精神独立展开思考，语言冷静而有光，适合在深沉草本调中慢慢咀嚼。"
  },
  matched_traits: ["herbal", "dark", "deep", "full", "casual", "complex", "grounded"]
},
{
  id: "adv_061",
  theme_tag: "寻常与柔韧",
  coffee_name: "陶碗的日常 · 慧兰聪明杯",
  flavor_notes: ["焦糖", "红苹果", "坚果", "柔甜"],
  quote: "日子像一只常用的陶碗，边缘或许有些旧，却仍能盛住热汤、笑声和一次次重新开始。",
  book_recommendation: {
    title: "《平如美棠》",
    author: "饶平如",
    reason: "以画与文字记录普通夫妻相守的一生，细节朴实深情，适合在日常风味中感受岁月的柔韧。"
  },
  matched_traits: ["caramel", "balanced", "calm", "steeped", "tolerant", "content", "daily"]
},
{
  id: "adv_062",
  theme_tag: "隐秘与照见",
  coffee_name: "月影的可可 · 洪都拉斯浓缩",
  flavor_notes: ["黑巧克力", "黑莓", "烟熏", "醇苦"],
  quote: "有些心事适合留在暗处，不急着交给语言。等夜色安静下来，它们也许会自己露出轮廓。",
  book_recommendation: {
    title: "《黑暗的左手》",
    author: "厄休拉·勒古恩",
    reason: "借遥远星球探问身份、关系与理解的边界，世界观深邃，适合搭配幽暗浓烈的咖啡。"
  },
  matched_traits: ["chocolate", "dark", "hidden", "intense", "focused", "pure", "complex"]
},
{
  id: "adv_063",
  theme_tag: "仪式与敬畏",
  coffee_name: "玻璃壶的星光 · 虹吸瑰夏",
  flavor_notes: ["白花", "蜜桃", "伯爵茶", "余韵"],
  quote: "看水汽一点点升起，便知道寻常之物也有庄严时刻。认真对待一杯咖啡，是给当下的一次致意。",
  book_recommendation: {
    title: "《茶之书》",
    author: "冈仓天心",
    reason: "从茶道谈及东方美学、器物与待客之心，篇幅精炼，适合配合虹吸冲煮的仪式感阅读。"
  },
  matched_traits: ["floral", "elegant", "transparent", "smooth", "ritual", "awe", "tea_like"]
},
{
  id: "adv_064",
  theme_tag: "轻放与前行",
  coffee_name: "远岸的清水 · 冰摇椰青咖啡",
  flavor_notes: ["椰青", "白葡萄", "柑橘", "清甜"],
  quote: "不必带着所有旧事赶路。把已经明白的收进行囊，把尚未明白的交给远处，脚步会轻一些。",
  book_recommendation: {
    title: "《远方的鼓声》",
    author: "村上春树",
    reason: "旅行随笔将异地见闻与内心独白轻轻交织，适合在清透冰凉的风味中，获得片刻松弛。"
  },
  matched_traits: ["coconut_water", "fresh", "clean", "cold", "cool", "release", "light"]
}
];
