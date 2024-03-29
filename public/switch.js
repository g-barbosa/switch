var socket = io('https://just-a-toggle-switch.onrender.com/')

function changeState(state) {
  document.getElementById('toggleButton').checked = state;
  changeBg(state)
  socket.emit('sendState', state)
}

function handleSwitch(cb) {
  changeState(cb.checked)
}

function changeBg(state) {
  document.getElementById('toggleButton').checked = state;
  if (state) {
    document.getElementById('message').style.cssText = "color: white; transition: all .4s;"
    document.body.style.cssText = "background-color: black; transition: all .4s;";
  } else {
    document.getElementById('message').style.cssText = "color: black; transition: all .4s;"
    document.body.style.cssText = "background-color: white; transition: all .4s;";
  }
}

socket.on('currentState', function(currentState) {
  changeState(currentState)
})

socket.on('receivedState', function(newState) {
  changeBg(newState)
})
