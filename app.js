timeout = 100

function update () {
  const time = new Date().toLocaleTimeString()
  document.title = time
  output.innerHTML = time
  setTimeout(update, timeout)
}

setTimeout(update, timeout)

// setup dark mode switcher
const toggleDarkMode = () => {
  document.body.classList.toggle('dark')
  localStorage.setItem('dark', document.body.classList.contains('dark'))
}

document
  .getElementById('dark-mode-switcher')
  .onclick = toggleDarkMode

// set dark mode if needed
const enabledSystemDarkMode = (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
)

if (enabledSystemDarkMode || localStorage.getItem('dark') === "true") {
  document.body.classList.add('no-animate')
  toggleDarkMode()
  document.body.classList.remove('no-animate')
}
