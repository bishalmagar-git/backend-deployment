//creating a server

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res) =>{
    res.send('Please Login.')
})

app.get('/youtube', (req,res) => {
    res.send("<h2> Hello People </h2>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})