// CLOCK
function clock() {
  const now = new Date();
  let hours = now.getHours();
  const pa = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const Hours = hours.toString().padStart(2, "0");
  const Minutes = now.getMinutes().toString().padStart(2, "0");
  const Seconds = now.getSeconds().toString().padStart(2, "0");
  const Order = `${Hours}:${Minutes}:${Seconds} ${pa}`;
  document.getElementById("clock").textContent = Order;
}
setInterval(clock, 1000);

// GOALS
const input = document.getElementById('goalInput');
const button = document.getElementById("addGoalButton");
const goalList = document.getElementById("goalList");
const clearButton = document.getElementById("clearGoalsButton");

// Render all goals from localStorage
function renderGoals() {
  goalList.innerHTML = "";
  const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
  savedGoals.forEach(g => {
    const li = document.createElement("li");
    if (g.completed) {
      li.textContent = `${g.text} (Completed at ${g.completedTime})`;
      li.style.color = "green";
    } else {
      li.textContent = `${g.text} (${g.time})`;
      li.style.color = "blue";
    }
    li.style.cursor = "pointer";
    li.addEventListener("click", function () {
      if (!g.completed) {
        const completedTime = new Date().toLocaleTimeString();
        li.textContent = `${g.text} (Completed at ${completedTime})`;
        li.style.color = "green";
        // Update localStorage
        g.completed = true;
        g.completedTime = completedTime;
        localStorage.setItem("goals", JSON.stringify(savedGoals));
      }
    });
    goalList.appendChild(li);
  });
}

// On page load, render goals
window.addEventListener("DOMContentLoaded", renderGoals);

// Add new goal
button.addEventListener("click", function () {
  const goal = input.value.trim();
  if (goal) {
    const currentTime = new Date().toLocaleTimeString();
    let savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    savedGoals.push({ text: goal, time: currentTime });
    localStorage.setItem("goals", JSON.stringify(savedGoals));
    renderGoals();
    input.value = "";
    input.focus();
  }
});

// Clear all goals
clearButton.addEventListener("click", function () {
  localStorage.removeItem("goals");
  goalList.innerHTML = "";
});