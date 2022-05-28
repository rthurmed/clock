UPDATE_TIMEOUT = 100

const updateTimeLoop = () => {
  const time = new Date().toLocaleTimeString()
  document.title = time
  output.innerHTML = time
  setTimeout(updateTimeLoop, UPDATE_TIMEOUT)
}

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('dark', document.documentElement.classList.contains('dark'))
}

if (
  localStorage.getItem('dark') === 'true' ||
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  toggleDarkMode()
}

window.onload = function() {
  updateTimeLoop()

  document
    .getElementById('dark-mode-switcher')
    .onclick = toggleDarkMode
}
