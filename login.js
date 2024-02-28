function login() {
  const nameEl = document.querySelector("#User");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "library.html";
}
