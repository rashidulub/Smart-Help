let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Copy number
function copyNumber(number) {
  navigator.clipboard.writeText(number);
  showToast("✅ Copied: " + number);
  copyCount++;
  document.getElementById("copyCount").innerText = copyCount;
}

// Make a call
function makeCall(name, number) {
  if (coinCount < 20) {
    showToast("❌ Not enough coins!");
    return;
  }
  showToast(`📞 Calling ${name}...`);
  coinCount -= 20;
  document.getElementById("coinCount").innerText = coinCount;

  let historyList = document.getElementById("historyList");
  let li = document.createElement("li");
  let time = new Date().toLocaleTimeString();
  li.innerText = `${name} (${number}) - ${time}`;
  historyList.prepend(li);
}

// Heart
function increaseHeart(el) {
  if (!el.classList.contains("loved")) {
    el.src = "/assets/heart.png";
    el.classList.add("loved");
    heartCount++;
    document.getElementById("heartCount").innerText = heartCount;
    showToast("❤️ Added to favorites");
  }
}

// Clear History
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
  showToast("🗑️ History Cleared");
}
