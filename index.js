require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('balachandradotcom')
  })


  app.get('/login', (req, res) =>{
    res.send('<h1>Please login at chai aur code')
  })

  app.get('/youtube', (req, res) => {
        res.send("<h2>Chai aur code</h2>")
  })

app.listen(port, () => {
  console.log(`node app listening on port ${port}`)
})