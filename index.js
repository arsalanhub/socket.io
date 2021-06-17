const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index')
})

server.listen(3000, () => {
	console.log('Server started at 3000')
})