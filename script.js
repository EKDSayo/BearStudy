/* =========================================================
   BEAR STUDY V3 - JAVASCRIPT
   Virtual accounts + individual progress
========================================================= */

const vocabulary = [
  { vi:"dụng cụ", en:"tool / instrument", ko:"도구" },
  { vi:"dụng cụ viết", en:"writing instrument", ko:"필기 도구" },
  { vi:"bút bi", en:"ballpoint pen", ko:"볼펜" },
  { vi:"cuộc sống", en:"life / daily life", ko:"생활" },
  { vi:"cần thiết", en:"necessary / essential", ko:"필요하다 / 필수적이다" },
  { vi:"quan trọng", en:"important", ko:"중요하다" },
  { vi:"sử dụng", en:"use", ko:"사용하다" },
  { vi:"ghi chú", en:"take notes / note down", ko:"메모하다" },
  { vi:"thông tin", en:"information", ko:"정보" },
  { vi:"viết", en:"write", ko:"쓰다" },
  { vi:"ký", en:"sign", ko:"서명하다" },
  { vi:"hợp đồng", en:"contract", ko:"계약서" },
  { vi:"phát minh", en:"invention", ko:"발명" },
  { vi:"phát minh ra", en:"invent", ko:"발명하다" },
  { vi:"ra đời", en:"come into existence / be invented", ko:"탄생하다 / 발명되다" },
  { vi:"lịch sử", en:"history", ko:"역사" },
  { vi:"hoàn cảnh", en:"circumstances", ko:"상황 / 배경" },
  { vi:"mục đích", en:"purpose", ko:"목적" },
  { vi:"nguyên lý", en:"principle", ko:"원리" },
  { vi:"hoạt động", en:"operate / function", ko:"작동하다" },
  { vi:"cấu tạo", en:"structure / construction", ko:"구조" },
  { vi:"bộ phận", en:"component / part", ko:"부품 / 부분" },
  { vi:"chi tiết", en:"detail / component", ko:"세부 / 부품" },
  { vi:"chức năng", en:"function", ko:"기능" },
  { vi:"cơ chế", en:"mechanism", ko:"메커니즘 / 원리" },
  { vi:"quá trình", en:"process", ko:"과정" },
  { vi:"hiện tượng", en:"phenomenon", ko:"현상" },
  { vi:"bề mặt", en:"surface", ko:"표면" }
];

const USERS_KEY = "bearStudyUsersV3";
const CURRENT_KEY = "bearStudyCurrentUserV3";

let users = JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
let currentUsername = localStorage.getItem(CURRENT_KEY) || null;
let state = null;

let flashIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let typingIndex = 0;
let typingChecked = false;

const $ = (id) => document.getElementById(id);

function defaultUser(displayName) {
  return {
    displayName,
    password: "",
    learned: [],
    favorites: [],
    wrong: [],
    xp: 0,
    dark: false,
    createdAt: new Date().toISOString()
  };
}

function saveUsers() {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function saveState() {
  if (!currentUsername || !state) return;
  users[currentUsername] = state;
  saveUsers();
}

function loadCurrentUser() {
  state = currentUsername && users[currentUsername]
    ? users[currentUsername]
    : null;
}

function requireLogin() {
  if (!currentUsername || !state) {
    showToast("🐻 Hãy đăng nhập để lưu tiến trình học.");
    openAuth();
    return false;
  }
  return true;
}

/* ---------- NAVIGATION ---------- */

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = $("page-" + page);
  if (!target) return;
  target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });

  const titles = {
    home:"Trang chủ",
    vocabulary:"Từ vựng",
    flashcard:"Flashcard",
    quiz:"Trắc nghiệm",
    typing:"Gõ đáp án",
    wrong:"Từ cần ôn",
    settings:"Cài đặt"
  };
  $("pageTitle").textContent = titles[page] || "Bear Study";

  if (page === "vocabulary") renderVocabulary();
  if (page === "wrong") renderWrong();
  if (page === "quiz") newQuiz();
  if (page === "typing") newTyping();

  $("sidebar").classList.remove("open");
  window.scrollTo({ top:0, behavior:"smooth" });
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.page));
});

document.querySelectorAll("[data-page-target]").forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.pageTarget));
});

$("menuBtn").addEventListener("click", () => $("sidebar").classList.toggle("open"));

/* ---------- AUTH ---------- */

function openAuth() {
  $("authOverlay").classList.add("show");
}

function closeAuth() {
  $("authOverlay").classList.remove("show");
}

$("authClose").addEventListener("click", closeAuth);

$("authOverlay").addEventListener("click", (e) => {
  if (e.target === $("authOverlay")) closeAuth();
});

document.querySelectorAll("[data-auth-tab]").forEach(tab => {
  tab.addEventListener("click", () => switchAuth(tab.dataset.authTab));
});

function switchAuth(type) {
  const login = type === "login";
  $("loginForm").classList.toggle("active", login);
  $("registerForm").classList.toggle("active", !login);

  document.querySelectorAll(".auth-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.authTab === type);
  });

  $("loginMessage").textContent = "";
  $("registerMessage").textContent = "";
}

$("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const displayName = $("registerDisplayName").value.trim();
  const username = $("registerUsername").value.trim().toLowerCase();
  const password = $("registerPassword").value;
  const password2 = $("registerPassword2").value;
  const message = $("registerMessage");

  if (!displayName || !username || !password) {
    message.textContent = "⚠️ Vui lòng điền đầy đủ thông tin.";
    message.style.color = "var(--danger)";
    return;
  }

  if (!/^[a-z0-9_.-]+$/.test(username)) {
    message.textContent = "⚠️ Tên đăng nhập chỉ dùng chữ thường, số, ., _ hoặc -.";
    message.style.color = "var(--danger)";
    return;
  }

  if (username.length < 3) {
    message.textContent = "⚠️ Tên đăng nhập phải có ít nhất 3 ký tự.";
    message.style.color = "var(--danger)";
    return;
  }

  if (password.length < 4) {
    message.textContent = "⚠️ Mật khẩu phải có ít nhất 4 ký tự.";
    message.style.color = "var(--danger)";
    return;
  }

  if (password !== password2) {
    message.textContent = "⚠️ Hai mật khẩu không giống nhau.";
    message.style.color = "var(--danger)";
    return;
  }

  if (users[username]) {
    message.textContent = "❌ Tên đăng nhập đã tồn tại.";
    message.style.color = "var(--danger)";
    return;
  }

  const newUser = defaultUser(displayName);
  newUser.password = password;
  users[username] = newUser;
  saveUsers();

  loginAs(username);
  showToast("🎉 Tạo tài khoản thành công!");
});

$("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = $("loginUsername").value.trim().toLowerCase();
  const password = $("loginPassword").value;
  const message = $("loginMessage");

  if (!users[username]) {
    message.textContent = "❌ Tài khoản không tồn tại.";
    message.style.color = "var(--danger)";
    return;
  }

  if (users[username].password !== password) {
    message.textContent = "❌ Mật khẩu không chính xác.";
    message.style.color = "var(--danger)";
    return;
  }

  loginAs(username);
  showToast("👋 Chào mừng bạn quay lại!");
});

function loginAs(username) {
  currentUsername = username;
  localStorage.setItem(CURRENT_KEY, username);
  loadCurrentUser();
  updateUserUI();
  applyTheme();
  updateDashboard();
  renderVocabulary();
  renderWrong();
  closeAuth();
}

function logoutUser() {
  saveState();
  currentUsername = null;
  state = null;
  localStorage.removeItem(CURRENT_KEY);
  updateUserUI();
  updateDashboard();
  renderVocabulary();
  renderWrong();
  showToast("👋 Bạn đã đăng xuất.");
}

function updateUserUI() {
  if (state) {
    $("currentUserName").textContent = state.displayName;
    $("currentUserStatus").textContent = "Đang học";
    $("authActionButton").textContent = "Đăng xuất";
    $("authActionButton").onclick = logoutUser;
    $("settingsName").textContent = state.displayName;
    $("settingsAuthBtn").textContent = "Đăng xuất";
    $("settingsAuthBtn").onclick = logoutUser;
    $("userAvatar").textContent = "🐻";
  } else {
    $("currentUserName").textContent = "Khách";
    $("currentUserStatus").textContent = "Chưa đăng nhập";
    $("authActionButton").textContent = "Đăng nhập";
    $("authActionButton").onclick = openAuth;
    $("settingsName").textContent = "Khách";
    $("settingsAuthBtn").textContent = "Đăng nhập";
    $("settingsAuthBtn").onclick = openAuth;
    $("userAvatar").textContent = "🐻";
  }
}

/* ---------- PROGRESS ---------- */

function markLearned(index) {
  if (!requireLogin()) return false;

  if (!state.learned.includes(index)) {
    state.learned.push(index);
    addXP(5, false);
    saveState();
    updateDashboard();
  }
  return true;
}

function addWrong(index) {
  if (!state.wrong.includes(index)) state.wrong.push(index);
}

function addXP(amount, update = true) {
  if (!state) return;
  state.xp += amount;
  if (update) {
    saveState();
    updateDashboard();
  }
}

function updateDashboard() {
  const learned = state ? state.learned.length : 0;
  const favorites = state ? state.favorites.length : 0;
  const wrong = state ? state.wrong.length : 0;
  const xp = state ? state.xp : 0;
  const percent = Math.round((learned / vocabulary.length) * 100);
  const level = Math.floor(xp / 100) + 1;
  const levelXP = xp % 100;

  $("statLearned").textContent = learned;
  $("statFavorite").textContent = favorites;
  $("statScore").textContent = xp;
  $("statWrong").textContent = wrong;
  $("progressPercent").textContent = percent + "%";
  $("progressBar").style.width = percent + "%";
  $("learnedLabel").textContent = `${learned} / ${vocabulary.length} từ`;
  $("level").textContent = level;
  $("xp").textContent = xp;
  $("xpProgress").style.width = levelXP + "%";
  $("settingsScore").textContent = xp;

  $("heroGreeting").textContent = state
    ? `Chào ${state.displayName}! 🐻`
    : "Chào mừng bạn đến với Bear Study!";
}

/* ---------- THEME ---------- */

function applyTheme() {
  document.body.classList.toggle("dark", !!(state && state.dark));
  $("darkButton").textContent = state && state.dark ? "☀️" : "🌙";
}

$("darkButton").addEventListener("click", () => {
  if (!requireLogin()) return;
  state.dark = !state.dark;
  saveState();
  applyTheme();
});

function toggleFavorite(index) {
  if (!requireLogin()) return;

  const pos = state.favorites.indexOf(index);
  if (pos === -1) {
    state.favorites.push(index);
    showToast("⭐ Đã thêm vào yêu thích!");
  } else {
    state.favorites.splice(pos, 1);
    showToast("☆ Đã bỏ yêu thích.");
  }

  saveState();
  updateDashboard();
  renderVocabulary();
}

/* ---------- VOCABULARY ---------- */

function vocabCard(item, index) {
  const learned = state?.learned.includes(index);
  const favorite = state?.favorites.includes(index);

  return `
    <article class="vocab-card ${learned ? "learned" : ""}">
      <button class="fav-btn" data-fav="${index}" title="Yêu thích">${favorite ? "⭐" : "☆"}</button>
      <span class="index">#${String(index + 1).padStart(2,"0")} ${learned ? "✓ Đã học" : ""}</span>
      <h3>${item.vi}</h3>
      <div class="en">${item.en}</div>
      <div class="ko">${item.ko}</div>
      <div class="actions">
        <button class="secondary-btn" data-learn="${index}">${learned ? "✓ Đã học" : "Đánh dấu đã học"}</button>
      </div>
    </article>
  `;
}

function renderVocabulary() {
  const query = $("searchInput").value.trim().toLowerCase();
  const list = vocabulary
    .map((item,index) => ({item,index}))
    .filter(({item}) => {
      if (!query) return true;
      return [item.vi,item.en,item.ko].some(x => x.toLowerCase().includes(query));
    });

  $("vocabGrid").innerHTML = list.length
    ? list.map(({item,index}) => vocabCard(item,index)).join("")
    : `<div class="empty"><div class="empty-bear">🐻</div>Không tìm thấy từ nào.</div>`;

  document.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite(Number(btn.dataset.fav)));
  });

  document.querySelectorAll("[data-learn]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (markLearned(Number(btn.dataset.learn))) {
        showToast("📖 Đã lưu tiến trình học!");
        renderVocabulary();
      }
    });
  });
}

$("searchInput").addEventListener("input", renderVocabulary);

/* ---------- FLASHCARD ---------- */

function updateFlashcard() {
  const item = vocabulary[flashIndex];
  $("flashNumber").textContent = `${flashIndex + 1} / ${vocabulary.length}`;
  $("flashVi").textContent = item.vi;
  $("flashEn").textContent = item.en;
  $("flashKo").textContent = item.ko;
  $("flashcard").classList.remove("flipped");
}

$("flashcard").addEventListener("click", () => {
  $("flashcard").classList.toggle("flipped");
});

$("flashPrev").addEventListener("click", () => {
  flashIndex = (flashIndex - 1 + vocabulary.length) % vocabulary.length;
  updateFlashcard();
});

$("flashNext").addEventListener("click", () => {
  flashIndex = (flashIndex + 1) % vocabulary.length;
  updateFlashcard();
});

$("flashLearnedBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  if (markLearned(flashIndex)) {
    showToast("💙 Từ này đã được lưu!");
    updateFlashcard();
  }
});

/* ---------- QUIZ ---------- */

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function newQuiz() {
  quizIndex = Math.floor(Math.random() * vocabulary.length);
  quizAnswered = false;
  const item = vocabulary[quizIndex];

  $("quizCounter").textContent = "Câu hỏi mới";
  $("quizScore").textContent = quizScore;
  $("quizQuestion").textContent = item.vi;
  $("quizFeedback").textContent = "";
  $("nextQuiz").disabled = false;

  const wrongOptions = shuffle(
    vocabulary.filter((_,i) => i !== quizIndex)
  ).slice(0,3).map(x => x.ko);

  const answers = shuffle([item.ko, ...wrongOptions]);

  $("quizAnswers").innerHTML = answers.map(ans =>
    `<button class="answer-btn" data-answer="${escapeAttr(ans)}">${ans}</button>`
  ).join("");

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => checkQuiz(btn, btn.dataset.answer));
  });
}

function escapeAttr(value) {
  return value.replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function checkQuiz(button, answer) {
  if (quizAnswered) return;

  if (!requireLogin()) return;

  quizAnswered = true;
  const correct = vocabulary[quizIndex].ko;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    if (btn.dataset.answer === correct) btn.classList.add("correct");
  });

  if (answer === correct) {
    button.classList.add("correct");
    quizScore++;
    addXP(10, false);
    markLearned(quizIndex);
    $("quizFeedback").textContent = "🎉 Chính xác! +10 XP";
    $("quizFeedback").style.color = "var(--success)";
  } else {
    button.classList.add("wrong");
    addWrong(quizIndex);
    addXP(2, false);
    saveState();
    updateDashboard();
    $("quizFeedback").textContent = `💡 Đáp án đúng: ${correct}`;
    $("quizFeedback").style.color = "var(--danger)";
  }

  $("quizScore").textContent = quizScore;
  updateDashboard();
}

$("nextQuiz").addEventListener("click", newQuiz);

/* ---------- TYPING ---------- */

function newTyping() {
  typingIndex = Math.floor(Math.random() * vocabulary.length);
  typingChecked = false;
  $("typingQuestion").textContent = vocabulary[typingIndex].vi;
  $("typingInput").value = "";
  $("typingFeedback").textContent = "";
  $("typingInput").focus();
}

function normalizeText(text) {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

$("checkTyping").addEventListener("click", () => {
  if (typingChecked) return;
  if (!requireLogin()) return;

  typingChecked = true;

  const answer = normalizeText($("typingInput").value);
  const correct = normalizeText(vocabulary[typingIndex].ko);

  if (answer === correct) {
    addXP(10, false);
    markLearned(typingIndex);
    $("typingFeedback").textContent = "🎉 Chính xác! +10 XP";
    $("typingFeedback").style.color = "var(--success)";
  } else {
    addWrong(typingIndex);
    addXP(2, false);
    saveState();
    updateDashboard();
    $("typingFeedback").textContent = `💡 Đáp án: ${vocabulary[typingIndex].ko}`;
    $("typingFeedback").style.color = "var(--danger)";
  }
});

$("typingInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") $("checkTyping").click();
});

$("nextTyping").addEventListener("click", newTyping);

/* ---------- WRONG WORDS ---------- */

function renderWrong() {
  const indexes = state ? state.wrong : [];

  if (!indexes.length) {
    $("wrongList").innerHTML = `
      <div class="empty">
        <div class="empty-bear">🐻</div>
        <strong>Chưa có từ cần ôn!</strong>
        <p>Hãy làm quiz hoặc gõ đáp án để luyện tập.</p>
      </div>`;
    return;
  }

  $("wrongList").innerHTML = indexes
    .map(index => vocabCard(vocabulary[index], index))
    .join("");

  document.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite(Number(btn.dataset.fav)));
  });

  document.querySelectorAll("[data-learn]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (markLearned(Number(btn.dataset.learn))) {
        showToast("📖 Đã đánh dấu đã học!");
        renderWrong();
      }
    });
  });
}

/* ---------- SETTINGS ---------- */

$("settingsAuthBtn").addEventListener("click", () => {
  if (state) logoutUser();
  else openAuth();
});

$("resetBtn").addEventListener("click", () => {
  if (!requireLogin()) return;

  const ok = confirm("Bạn có chắc muốn xóa toàn bộ tiến trình học của tài khoản này?");
  if (!ok) return;

  state.learned = [];
  state.favorites = [];
  state.wrong = [];
  state.xp = 0;

  saveState();
  updateDashboard();
  renderVocabulary();
  renderWrong();
  showToast("🗑️ Đã xóa tiến trình.");
});

$("exportBtn").addEventListener("click", () => {
  if (!requireLogin()) return;

  const data = {
    username: currentUsername,
    displayName: state.displayName,
    learned: state.learned,
    favorites: state.favorites,
    wrong: state.wrong,
    xp: state.xp,
    exportedAt: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${currentUsername}-bear-study-progress.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("📤 Đã xuất dữ liệu học tập.");
});

/* ---------- TOAST ---------- */

let toastTimer;

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ---------- START ---------- */

loadCurrentUser();
updateUserUI();
applyTheme();
updateDashboard();
renderVocabulary();
renderWrong();
updateFlashcard();
newQuiz();
newTyping();

if (!currentUsername) {
  setTimeout(openAuth, 500);
}
