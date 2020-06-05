const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const url = require('url')
const query = require('querystring')
const uuid = require('uuid')
const moment = require('moment')
const Session = require('./Session.js')

// initialize express
const app = express()
//initialize a simple http server
const server = http.createServer(app)
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server })
// express static folder
app.use(express.static('static'))
// session object
var sessions = []
// valid message types
var messageTypes = ['ping', 'newWord', 'removeLastWord', 'status', 'connection']
// socket timeout, in seconds
var timeoutLength = 10


function validateRequest (request, socket) {
  var sessionId = query.parse(url.parse(request.url).query).id
  
  // console.log('sessionId:', sessionId)

  // check for missing id
  if (typeof sessionId === 'undefined' || sessionId === '' || sessionId === 'undefined') {
    // missing id
    // console.log('no id, closing socket')
    socket.close(1003, JSON.stringify({
      type: 'connection',
      data: 'Connection closed: No session id provided'
    }))
    return false
  }

  // check if session with id exists
  var sessionMatch = sessions.filter(s => s.publicId === sessionId || s.privateId === sessionId)[0]
  if (typeof sessionMatch === 'undefined') {
    // console.log('session not found, closing socket')
    socket.close(1011, JSON.stringify({
      type: 'connection',
      data: 'Connection closed: Session not found'
    }))
    return false
  }


  return {
    sessionId,
    session: sessionMatch
  }
}

function validateMessage(message, callback) {
  var error = false
  // Try to parse the message, return error if it's not valid json
  try {
    message = JSON.parse(message);
  } catch(error) {
    // console.log(err)
    callback(message, error)
    return
  }

  // check if type is set
  if (typeof message.type === 'undefined') {
    error = 'No message type set: ' + message.type
    callback(message, error)
    return
  }

  // check if type is valid
  if (messageTypes.indexOf(message.type) === -1) {
    error = 'Invalid message type: ' + message.type
    callback(message, error)
    return
  }

  // check if data is set
  if (typeof message.data === 'undefined') {
    error = 'No data: ' + message.data
    callback(message, error)
    return
  }

  callback(message, error)
}

app.get('/new', function (req, res) {
  // create a new session
  // TODO: some sort of cooldown to prevent DoS attacks
  var newSession = new Session(uuid.v4(), uuid.v4())
  sessions.push(newSession)

  res.json({
    type: 'connection',
    data: {
      publicId: newSession.publicId,
      privateId: newSession.privateId
    }
  })

  console.log('new session created')
})

// websocket stuff
wss.on('connection', (ws, req) => {
  var sessionData = validateRequest(req, ws)
  if (!sessionData) {
    // console.log('invalid request, return')
    return
  }

  // set write flag if id is private
  var private = sessions.filter(s => s.privateId === sessionData.sessionId)[0]
  if (typeof private !== 'undefined') {
    ws.writePermission = true
  }

  ws.on('message', (message) => {
    validateMessage(message, (message, error) => {
      if (error) {
        console.log(`Invalid message recieved: [${message}]\n\t${error}`)
        return
      }


      // console.log('message type:', typeof message, 'content: ', message)
      // check message type
      switch (message.type) {
        case 'ping':
          ws.lastActive = moment().format()
          // console.log('ping from client:', ws.lastActive)
          break
      
        case 'newWord':
          if (ws.writePermission) {
            // sessionData.session.content = message.data
            sessionData.session.broadcast(JSON.stringify({
              type: 'newWord',
              data: message.data
            }), ws)
          }
          break
        
        case 'removeLastWord':
          console.log('remove last word')
          if (ws.writePermission) {
            // sessionData.session.content = message.data
            sessionData.session.broadcast(JSON.stringify({
              type: 'removeLastWord',
              data: ''
            }), ws)
          }
          break

        case 'status':
          if (ws.writePermission) {
            ws.send(JSON.stringify({
              type: 'status',
              data: {
                clients: 'tba'
              }
            }))
          }
          break

        default:
          break
      }
    })
  })

  // confirm connection 
  ws.send(JSON.stringify({
    type: 'connection',
    data: {
      sessionId: sessionData.sessionId,
      writePermission: ws.writePermission || false
    }
  }))

  // set last active time
  ws.lastActive = moment().format()

  // send cached content
  if (sessionData.session.content !== '') {
    ws.send(JSON.stringify({
      type: 'content',
      data: sessionData.session.content
    }))
  }

  // save socket
  sessionData.session.sockets.push(ws)

})


function sessionCleanup() {
  console.log('\ncleaning up dead sockets')
  console.log(sessions.length , 'sessions')
  // ping all sockets
  sessions.forEach(session => {
    session.pingSockets()
  })
  // close inactive sockets
  sessions.forEach(session => {
    session.sockets.forEach(socket => {
      if (moment(socket.lastActive).isAfter(moment().subtract(timeoutLength, 'seconds'))) {
        console.log('socket is active', socket.lastActive)
      } else {
        console.log('socket ' + socket + 'is inactive, close')
        // terminate socket
        socket.terminate()
        // remove socket
        session.sockets = session.sockets.filter(s => {
          return s !== socket
        })
      }
    })
  })
  // close inactive sessions
  sessions.forEach(session => {
    console.log(`Session: ${session.privateId}, sockets: ${session.sockets.length}`)
    if (session.sockets.length <= 0) {
      console.log('\tsession has no active sockets, remove')
      sessions = sessions.filter(s => {
        return s !== session
      })
    }
  })
}


//start our server
server.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${server.address().port} :)`)
})

setInterval(sessionCleanup, 5000);