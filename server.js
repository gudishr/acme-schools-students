const express = require('express')
const path = require('path')
const { models, syncAndSeed } = require('./db')

const app = express()

app.use(express.json())

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/api/students', async (req, res, next) => {
  models.Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})

app.get('/api/schools', async (req, res, next) => {
  models.School.findAll()
    .then(schools => res.send(schools))
    .catch(next)
})

app.listen(3000, ()=> console.log("Listening at port 3000"))

syncAndSeed()