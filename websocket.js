const socketio = require('socket.io')

const setupSocket = (server) => {
  io = socketio(server, {
    cors: {
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
  });

  let currentState = false

  io.on('connection', socket => {
    console.log(`socket conectado': ${socket.id}`)
  
    socket.emit('currentState', currentState)
  
    socket.on('sendState', state => {
      currentState = state
      socket.broadcast.emit('receivedState', state)
    })
  })
}

module.exports = setupSocket;