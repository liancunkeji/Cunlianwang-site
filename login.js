function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  if (user === "a") {
    window.location.href = "pages/a.html";
  } else if (user === "b" && pass === "112233") {
    window.location.href = "pages/b.html";
  } else if (user === "c" && pass === "lsj") {
    window.location.href = "pages/c.html";
  } else {
    alert("用户名或密码错误");
  }
}