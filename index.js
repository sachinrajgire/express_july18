const express = require('express')
const app = express()
const port = 4000
const data = require('./Student_Data.json')
var cors = require('cors')
const axios = require ('axios')

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

//
//install axios in backend 
// getposts - create new route that will call jsonplaceer
app.get('/getposts', (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(resp =>res.status(200).json(resp.data))
  .catch(e=>res.status(404))
  })

  // SPACE X HISTORY
app.get('/getposts', (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(resp =>res.status(200).json(resp.data))
  .catch(e=>res.status(404))
  })

//https://jsonplaceholder.typicode.com/posts
//return that data to front end 


//fallback / catch all 
app.get('/', (req, res) => {
    res.send("<h1>'Welcome to Site '</h1>")
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