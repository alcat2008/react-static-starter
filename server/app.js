const express = require('express')
const bodyParder = require('body-parser')
const cors = require('cors')
const { port } = require('./config')
const api = require('./routes/api')

const app = express()
app.use(cors())
app.use(bodyParder())
app.use('/api', api)

app.get('/', function (req, res) {
  res.send('Team opinions!')
})

app.post('/test', function (req, res) {
  console.log('test')
  res.json({ text: 'hahahaha' })
})

const server = app.listen(port, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
