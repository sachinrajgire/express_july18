const express = require('express')
const app = express()
const port = 4000
const data = require('./Student_Data.json')
var cors = require('cors')

//get, post, patch, delete, put --REST API 
app.use(cors())

app.get('/users', (req, res) => {
res.json({ user: 'tobi' })
})

app.get('/users/status', (req, res) => {
res.status(404).send("Get lost")
})

app.get('/getallentries', (req, res) => {
res.status(200).json(data)  
})

//fallback / catch all 
app.get('/', (req, res) => {
    res.send("<h1>'Tanishka'</h1>")
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Task1
// When front end request /users 
// send any json files 

// Task2
// When front end request /users/status
// send HTTP status code 404 ( not found) 