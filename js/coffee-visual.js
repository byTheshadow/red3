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
  const coffeeVisual = document.getElementById("coffeeVisual");
  const cup = document.getElementById("cup");

  if (!coffeeVisual || !cup) return;

  root.style.setProperty("--liquid-color", visual.liquidColor);
  root.style.setProperty("--liquid-opacity", visual.liquidOpacity);
  root.style.setProperty("--milk-color", visual.milkColor);
  root.style.setProperty("--crema-color", visual.cremaColor);
  root.style.setProperty("--cup-width", visual.cupWidth);
  root.style.setProperty("--cup-height", visual.cupHeight);
  root.style.setProperty("--liquid-height", visual.liquidHeight);
  root.style.setProperty("--mood-color", visual.moodColor);

  coffeeVisual.classList.toggle("show-crema", Boolean(visual.showCrema));
  coffeeVisual.classList.toggle("show-milk", Boolean(visual.showMilk));
  coffeeVisual.classList.toggle("show-bubbles", Boolean(visual.showBubbles));
  coffeeVisual.classList.toggle("show-steam", Boolean(visual.showSteam));
  coffeeVisual.classList.toggle("show-ice", Boolean(visual.showIce));

  coffeeVisual.classList.remove(
    "show-petals",
    "show-salt",
    "show-citrus"
  );

  if (visual.topping === "petals") {
    coffeeVisual.classList.add("show-petals");
  }

  if (visual.topping === "salt") {
    coffeeVisual.classList.add("show-salt");
  }

  if (visual.topping === "citrus") {
    coffeeVisual.classList.add("show-citrus");
  }

  cup.classList.remove("espresso", "tall");

  if (visual.cupShape === "espresso") {
    cup.classList.add("espresso");
  }

  if (visual.cupShape === "tall") {
    cup.classList.add("tall");
  }
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
