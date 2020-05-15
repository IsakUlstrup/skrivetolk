class Session {
  constructor(publicId, privateId) {
    this.privateId = privateId
    this.publicId = publicId
    this.sockets = []
    this.content = ''
  }
  // broadcast data to all sockets
  broadcast(data) {
    // if noone is connected, return
    if (this.sockets.length < 1) {
      return
    }

    // broadcast
    this.sockets.forEach(socket => {
      // console.log('sending: ', data)
      socket.send(data)
    })
  }
  // broadcast content
  broadCastContent(data) {
    return data
  }
  // broadcast to all admin sockets
  privateBroadcast(data) {
    var privateSockets = this.socket.filter(socket => {
      socket.admin === true
    })
    console.log('broadcast to private sockets: ', privateSockets)
  }
}

module.exports = Session