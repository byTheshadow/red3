/**
 * 咖啡动态视觉引擎
 * 依赖：js/data/options.js
 */

function mergeVisual() {
  const merged = { ...defaultVisual };

  steps.forEach((step) => {
    const selected = state.selections[step.key];

    if (selected?.visual) {
      Object.assign(merged, selected.visual);
    }
  });

  return merged;
}

function updateCoffeeVisual() {
  const visual = mergeVisual();
  const root = document.documentElement;

  root.style.setProperty("--liquid-color", visual.liquidColor);
  root.style.setProperty("--liquid-opacity", visual.liquidOpacity);
  root.style.setProperty("--milk-color", visual.milkColor);
  root.style.setProperty("--crema-color", visual.cremaColor);
  root.style.setProperty("--cup-width", visual.cupWidth);
  root.style.setProperty("--cup-height", visual.cupHeight);
  root.style.setProperty("--liquid-height", visual.liquidHeight);
  root.style.setProperty("--mood-color", visual.moodColor);

  /**
   * 同时更新：
   * - 调配页的 #coffeeVisual / #cup
   * - 结果页的 #resultCoffeeVisual / #resultCup
   */
  const visualPairs = [
    {
      visualElement: document.getElementById("coffeeVisual"),
      cupElement: document.getElementById("cup")
    },
    {
      visualElement: document.getElementById("resultCoffeeVisual"),
      cupElement: document.getElementById("resultCup")
    }
  ];

  visualPairs.forEach(({ visualElement, cupElement }) => {
    if (!visualElement || !cupElement) return;

    visualElement.classList.toggle("show-crema", Boolean(visual.showCrema));
    visualElement.classList.toggle("show-milk", Boolean(visual.showMilk));
    visualElement.classList.toggle("show-bubbles", Boolean(visual.showBubbles));
    visualElement.classList.toggle("show-steam", Boolean(visual.showSteam));
    visualElement.classList.toggle("show-ice", Boolean(visual.showIce));

    visualElement.classList.remove(
      "show-petals",
      "show-salt",
      "show-citrus"
    );

    if (visual.topping === "petals") {
      visualElement.classList.add("show-petals");
    }

    if (visual.topping === "salt") {
      visualElement.classList.add("show-salt");
    }

    if (visual.topping === "citrus") {
      visualElement.classList.add("show-citrus");
    }

    cupElement.classList.remove("espresso", "tall");

    if (visual.cupShape === "espresso") {
      cupElement.classList.add("espresso");
    }

    if (visual.cupShape === "tall") {
      cupElement.classList.add("tall");
    }
  });
}


function collectTraits() {
  const allTraits = [];

  steps.forEach((step) => {
    const selected = state.selections[step.key];

    if (selected && Array.isArray(selected.traits)) {
      allTraits.push(...selected.traits);
    }
  });

  return [...new Set(allTraits)];
}
