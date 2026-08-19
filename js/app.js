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

  document.getElementById("startBtn").addEventListener("click", () => {
    initBuilder();
    switchScreen("builderScreen");
  });

  document.getElementById("prevBtn").addEventListener("click", handlePrevStep);
  document.getElementById("nextBtn").addEventListener("click", handleNextStep);

  document.getElementById("reStartBtn").addEventListener("click", () => {
    switchScreen("openingScreen");
  });
}

/**
 * 设置开场页与结果卡片中的日期
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

  if (dateMain) dateMain.textContent = dateText;
  if (dateSub) dateSub.textContent = weekDays[now.getDay()];
  if (resultDate) resultDate.textContent = dateText;
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
   * 每次重新开启调配，默认选择每类中的第一项。
   * 如果你希望“重新调配”保留上一次选择，
   * 可以删除下面的 state.selections 重置部分。
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
 * 渲染当前调配步骤和选项
 */
function renderStep() {
  const currentStepConfig = steps[state.currentStep];

  if (!currentStepConfig) return;

  const stepKey = currentStepConfig.key;
  const currentOptions = optionData[stepKey];

  document.getElementById("stepKicker").textContent =
    `STEP ${String(state.currentStep + 1).padStart(2, "0")}`;

  document.getElementById("stepTitle").textContent =
    currentStepConfig.title;

  document.getElementById("stepDesc").textContent =
    currentStepConfig.desc;

  document.getElementById("stepCount").textContent =
    `${state.currentStep + 1} / ${steps.length}`;

  const optionGrid = document.getElementById("optionGrid");
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

  const isFirstStep = state.currentStep === 0;
  const isLastStep = state.currentStep === steps.length - 1;

  prevBtn.style.visibility = isFirstStep ? "hidden" : "visible";
  nextBtn.textContent = isLastStep ? "完成萃取" : "下一项";
}

/**
 * 上一步
 */
function handlePrevStep() {
  if (state.currentStep <= 0) return;

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
 * 在谏言库中，找到 traits 重合度最高的结果。
 *
 * 同分时：使用当天日期和用户 traits 进行稳定选择，
 * 避免每次结果都固定为数据库第一条。
 *
 * @param {string[]} userTraits
 * @returns {object|null}
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
 * 完成调配后，渲染结果卡片
 */
function showResultScreen() {
  const userTraits = collectTraits();
  const resultData = findBestMatch(userTraits);

  if (!resultData) {
    console.error("adviceData 为空，无法生成咖啡谏言。");
    return;
  }

  document.getElementById("resTag").textContent =
    resultData.theme_tag || "今日咖啡谏言";

  document.getElementById("resCoffeeName").textContent =
    resultData.coffee_name || "一杯属于今天的咖啡";

  document.getElementById("resQuote").textContent =
    resultData.quote || "愿你在这一杯咖啡里，慢慢听见自己的心。";

  renderFlavorPills(resultData.flavor_notes || []);
  renderBookRecommendation(resultData.book_recommendation || {});

  switchScreen("resultScreen");
}

/**
 * 渲染风味标签
 *
 * @param {string[]} flavorNotes
 */
function renderFlavorPills(flavorNotes) {
  const pillsContainer = document.getElementById("resFlavorPills");
  pillsContainer.innerHTML = "";

  flavorNotes.forEach((note) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = note;
    pillsContainer.appendChild(pill);
  });
}

/**
 * 渲染书籍推荐
 *
 * @param {object} book
 */
function renderBookRecommendation(book) {
  document.getElementById("resBookTitle").textContent =
    book.title || "一本适合今日的书";

  document.getElementById("resBookAuthor").textContent =
    book.author || "";

  document.getElementById("resBookReason").textContent =
    book.reason || "找一个安静的片刻，让文字陪这杯咖啡慢慢冷却。";
}

