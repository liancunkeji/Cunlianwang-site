function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value.trim();
  if (u === '村民') {
    window.location.href = 'viewer.html';
  } else if (u === '联网科技' && p === '112233') {
    window.location.href = 'operator.html';
  } else if (u === '蓝简办' && p === 'lsj') {
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('error').classList.remove('hidden');
  }
}