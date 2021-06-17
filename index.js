const express = require('express')
const app = express()
const server = require('http').createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index')
})

io.on('connection', (socket) => {
	console.log('User Connected')

	socket.on('disconnect', () => {
		console.log('User Disconnected')
	})

    socket.on('chat message', (msg) => {
    	io.emit('chat message', msg)
    })
})

server.listen(3000, () => {
	console.log('Server started at 3000')
})