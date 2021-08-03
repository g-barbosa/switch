var socket = io('https://just-a-toggle-switch.herokuapp.com/')

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
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

socket.on('currentState', function(currentState) {
  changeState(currentState)
})

socket.on('receivedState', function(newState) {
  changeBg(newState)
})