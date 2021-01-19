const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    status: 'iraj'
  })
})

app.listen(3000, err => {
  if (err) {
    throw err
  }

  console.log('server is listening')
})
