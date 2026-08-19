/**
 * =====================================================
 * 咖啡谏言 · 主应用逻辑
 * 文件：js/app.js
 *
 * 依赖加载顺序：
 * 1. js/data/options.js
 * 2. js/data/advice.js
 * 3. js/coffee-visual.js
 * 4. js/app.js
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", initApp);

/**
 * 应用初始化
 */
function initApp() {
  setTodayDate();

  const startBtn = document.getElementById("startBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const reStartBtn = document.getElementById("reStartBtn");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      initBuilder();
      switchScreen("builderScreen");
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", handlePrevStep);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", handleNextStep);
  }

  if (reStartBtn) {
    reStartBtn.addEventListener("click", () => {
      switchScreen("openingScreen");
    });
  }
}

/**
 * 设置结果卡片日期。
 *
 * 开场页已改为咖啡倾倒动画，不再展示日期与星期；
 * 仍保留 dateMain / dateSub 的兼容性判断，
 * 即使旧页面结构存在也可正常工作。
 */
function setTodayDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const weekDays = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
  ];

  const dateText = `${year}.${month}.${day}`;

  const dateMain = document.getElementById("dateMain");
  const dateSub = document.getElementById("dateSub");
  const resultDate = document.getElementById("resDate");

  if (dateMain) {
    dateMain.textContent = dateText;
  }

  if (dateSub) {
    dateSub.textContent = weekDays[now.getDay()];
  }

  if (resultDate) {
    resultDate.textContent = dateText;
  }
}

/**
 * 切换主页面
 *
 * @param {string} screenId - openingScreen / builderScreen / resultScreen
 */
function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.add("hidden");
  });

  const targetScreen = document.getElementById(screenId);

  if (targetScreen) {
    targetScreen.classList.remove("hidden");
  }
}

/**
 * 初始化一轮新的调配
 */
function initBuilder() {
  state.currentStep = 0;

  /**
   * 每次重新开启调配时，默认选择每一类的第一项。
   * 若希望保留上一次选择，可删除下面的重置逻辑。
   */
  state.selections = {
    beans: optionData.beans[0],
    methods: optionData.methods[0],
    bases: optionData.bases[0],
    accents: optionData.accents[0],
    temperatures: optionData.temperatures[0]
  };

  renderStep();
  updateCoffeeVisual();
}

/**
 * 渲染当前调配步骤与选项
 */
function renderStep() {
  const currentStepConfig = steps[state.currentStep];

  if (!currentStepConfig) {
    return;
  }

  const stepKey = currentStepConfig.key;
  const currentOptions = optionData[stepKey];

  const stepKicker = document.getElementById("stepKicker");
  const stepTitle = document.getElementById("stepTitle");
  const stepDesc = document.getElementById("stepDesc");
  const stepCount = document.getElementById("stepCount");
  const optionGrid = document.getElementById("optionGrid");

  if (
    !stepKicker ||
    !stepTitle ||
    !stepDesc ||
    !stepCount ||
    !optionGrid ||
    !Array.isArray(currentOptions)
  ) {
    return;
  }

  stepKicker.textContent =
    `STEP ${String(state.currentStep + 1).padStart(2, "0")}`;

  stepTitle.textContent = currentStepConfig.title;
  stepDesc.textContent = currentStepConfig.desc;
  stepCount.textContent = `${state.currentStep + 1} / ${steps.length}`;

  optionGrid.innerHTML = "";

  currentOptions.forEach((option) => {
    const isSelected = state.selections[stepKey]?.id === option.id;

    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = `option-card ${isSelected ? "active" : ""}`;

    optionButton.innerHTML = `
      <div class="option-label">${option.label}</div>
      <div class="option-subtitle">${option.subtitle}</div>
    `;

    optionButton.addEventListener("click", () => {
      state.selections[stepKey] = option;

      renderStep();
      updateCoffeeVisual();
    });

    optionGrid.appendChild(optionButton);
  });

  updateNavigationButtons();
}

/**
 * 更新底部“上一步 / 下一项”按钮
 */
function updateNavigationButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!prevBtn || !nextBtn) {
    return;
  }

  const isFirstStep = state.currentStep === 0;
  const isLastStep = state.currentStep === steps.length - 1;

  prevBtn.style.visibility = isFirstStep ? "hidden" : "visible";
  nextBtn.textContent = isLastStep ? "完成萃取" : "下一项";
}

/**
 * 上一步
 */
function handlePrevStep() {
  if (state.currentStep <= 0) {
    return;
  }

  state.currentStep -= 1;
  renderStep();
}

/**
 * 下一项，或完成萃取
 */
function handleNextStep() {
  const isLastStep = state.currentStep === steps.length - 1;

  if (!isLastStep) {
    state.currentStep += 1;
    renderStep();
    return;
  }

  showResultScreen();
}

/**
 * 在谏言库中找到 traits 重合度最高的结果。
 *
 * 同分时以当天日期和用户 traits 生成稳定结果，
 * 让同一天、相同选择得到相同谏言，
 * 但不会永远固定为数据库第一条。
 *
 * @param {string[]} userTraits 用户选择对应的特征
 * @returns {object|null} 最匹配的谏言数据
 */
function findBestMatch(userTraits) {
  if (!Array.isArray(adviceData) || adviceData.length === 0) {
    return null;
  }

  let highestScore = -1;
  let candidates = [];

  adviceData.forEach((advice) => {
    const matchedTraits = Array.isArray(advice.matched_traits)
      ? advice.matched_traits
      : [];

    const score = matchedTraits.filter((trait) =>
      userTraits.includes(trait)
    ).length;

    if (score > highestScore) {
      highestScore = score;
      candidates = [advice];
    } else if (score === highestScore) {
      candidates.push(advice);
    }
  });

  if (candidates.length === 1) {
    return candidates[0];
  }

  const seedText = `${new Date().toDateString()}-${userTraits.join("-")}`;

  const seed = [...seedText].reduce((total, char) => {
    return total + char.charCodeAt(0);
  }, 0);

  return candidates[seed % candidates.length];
}

/**
 * 拼接用户实际选择的咖啡名称。
 *
 * @returns {string} 例如：浅烘耶加雪菲 · 手冲
 */
function getActualCoffeeName() {
  const bean = state.selections.beans?.label || "今日咖啡";
  const method = state.selections.methods?.label || "";

  return method ? `${bean} · ${method}` : bean;
}

/**
 * 拼接基底、点睛风味与温度。
 *
 * @returns {string} 例如：燕麦奶 / 干桂花 / 温热
 */
function getActualCoffeeDetail() {
  const base = state.selections.bases?.label;
  const accent = state.selections.accents?.label;
  const temperature = state.selections.temperatures?.label;

  return [base, accent, temperature]
    .filter(Boolean)
    .join(" / ");
}

/**
 * 完成调配后，渲染结果页。
 */
function showResultScreen() {
  const userTraits = collectTraits();
  const resultData = findBestMatch(userTraits);

  if (!resultData) {
    console.error("adviceData 为空，无法生成咖啡谏言。");
    return;
  }

  const actualCoffeeName = getActualCoffeeName();
  const actualCoffeeDetail = getActualCoffeeDetail();

  /**
   * 兼容两种结果页 HTML：
   *
   * 新版：
   * - #resActualCoffeeName
   * - #resActualCoffeeDetail
   * - #resFlavorLine
   *
   * 旧版：
   * - #resCoffeeName
   * - #resFlavorPills
   */
  const resActualCoffeeName = document.getElementById("resActualCoffeeName");
  const resCoffeeName = document.getElementById("resCoffeeName");
  const resActualCoffeeDetail = document.getElementById("resActualCoffeeDetail");

  if (resActualCoffeeName) {
    resActualCoffeeName.textContent = actualCoffeeName;
  } else if (resCoffeeName) {
    resCoffeeName.textContent = actualCoffeeName;
  }

  if (resActualCoffeeDetail) {
    resActualCoffeeDetail.textContent = actualCoffeeDetail;
  }

  const resTag = document.getElementById("resTag");
  const resQuote = document.getElementById("resQuote");

  if (resTag) {
    resTag.textContent = resultData.theme_tag || "今日咖啡谏言";
  }

  if (resQuote) {
    resQuote.textContent =
      resultData.quote || "愿你在这一杯咖啡里，慢慢听见自己的心。";
  }

  renderFlavorLine(resultData.flavor_notes || []);
  renderBookRecommendation(resultData.book_recommendation || {});

  updateCoffeeVisual();
  switchScreen("resultScreen");
}

/**
 * 渲染风味内容。
 *
 * 优先使用新版的 #resFlavorLine；
 * 若页面仍是旧版，则自动渲染到 #resFlavorPills。
 *
 * @param {string[]} flavorNotes 风味标签数组
 */
function renderFlavorLine(flavorNotes) {
  const notes = Array.isArray(flavorNotes) && flavorNotes.length
    ? flavorNotes
    : ["一杯属于今天的风味"];

  const flavorLine = document.getElementById("resFlavorLine");
  const flavorPills = document.getElementById("resFlavorPills");

  /* 新版：文学杂志风的一行文字 */
  if (flavorLine) {
    flavorLine.textContent = notes.join("　·　");
  }

  /* 旧版：胶囊风味标签 */
  if (flavorPills) {
    flavorPills.innerHTML = "";

    notes.forEach((note) => {
      const pill = document.createElement("span");
      pill.className = "flavor-pill";
      pill.textContent = note;
      flavorPills.appendChild(pill);
    });
  }
}

/**
 * 渲染书籍推荐。
 *
 * @param {object} book 书籍数据
 */
function renderBookRecommendation(book) {
  const bookTitle = document.getElementById("resBookTitle");
  const bookAuthor = document.getElementById("resBookAuthor");
  const bookReason = document.getElementById("resBookReason");

  if (bookTitle) {
    bookTitle.textContent = book.title || "一本适合今日的书";
  }

  if (bookAuthor) {
    bookAuthor.textContent = book.author || "";
  }

  if (bookReason) {
    bookReason.textContent =
      book.reason || "找一个安静的片刻，让文字陪这杯咖啡慢慢冷却。";
  }
}
