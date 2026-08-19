/**
 * 主逻辑控制器
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. 初始化日期
  setTodayDate();

  // 2. 交互绑定
  document.getElementById("startBtn").addEventListener("click", () => {
    switchScreen("builderScreen");
    initBuilder();
  });

  document.getElementById("prevBtn").addEventListener("click", handlePrevStep);
  document.getElementById("nextBtn").addEventListener("click", handleNextStep);
  document.getElementById("reStartBtn").addEventListener("click", () => {
    switchScreen("openingScreen");
  });
});

// 动态日期计算
function setTodayDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  const dateStr = `${year}.${month}.${day}`;
  document.getElementById("dateMain").textContent = dateStr;
  document.getElementById("dateSub").textContent = weekDays[now.getDay()];
  document.getElementById("resDate").textContent = dateStr;
}

// 屏幕切换
function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");
}

// 初始化 Builder 默认值
function initBuilder() {
  state.currentStep = 0;
  steps.forEach(step => {
    if (!state.selections[step.key]) {
      state.selections[step.key] = optionData[step.key][0];
    }
  });
  renderStep();
  updateCoffeeVisual();
}

function handlePrevStep() {
  if (state.currentStep > 0) {
    state.currentStep -= 1;
    renderStep();
  }
}

function handleNextStep() {
  if (state.currentStep < steps.length - 1) {
    state.currentStep += 1;
    renderStep();
  } else {
    // 完成萃取，计算匹配结果并渲染卡片
    showResultScreen();
  }
}

/**
 * 智能特征匹配算法
 * 根据用户选择收集到的 userTraits，在 adviceData 中寻找重合度最高的谏言
 */
function findBestMatch(userTraits) {
  let bestMatch = adviceData[0];
  let maxScore = -1;

  adviceData.forEach(item => {
    let score = 0;
    item.matched_traits.forEach(trait => {
      if (userTraits.includes(trait)) {
        score += 1;
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = item;
    }
  });

  return bestMatch;
}

// 渲染结果页卡片
function showResultScreen() {
  const userTraits = collectTraits();
  const resultData = findBestMatch(userTraits);

  document.getElementById("resTag").textContent = resultData.theme_tag;
  document.getElementById("resCoffeeName").textContent = resultData.coffee_name;
  document.getElementById("resQuote").textContent = resultData.quote;
  
  // 渲染风味标签
  const pillsContainer = document.getElementById("resFlavorPills");
  pillsContainer.innerHTML = "";
  resultData.flavor_notes.forEach(note => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = note;
    pillsContainer.appendChild(pill);
  });

  // 渲染书籍
  document.getElementById("resBookTitle").textContent = resultData.book_recommendation.title;
  document.getElementById("resBookAuthor").textContent = resultData.book_recommendation.author;
  document.getElementById("resBookReason").textContent = resultData.book_recommendation.reason;

  switchScreen("resultScreen");
}
