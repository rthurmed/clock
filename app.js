timeout = 100

function update () {
  const time = new Date().toLocaleTimeString()
  document.title = time
  output.innerHTML = time
  setTimeout(update, timeout)
}

setTimeout(update, timeout)

