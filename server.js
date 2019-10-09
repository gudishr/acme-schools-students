const express = require('express')
const path = require('path')
const { models, syncAndSeed } = require('./db')

const app = express()

app.use(express.json())
app.use('/dist', express.static(path.join(__dirname, 'dist')))
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

app.delete('/api/students/:id', (req, res, next) => {
  models.Student.findByPk(req.params.id)
      .then(student => student.destroy())
      .catch(next)
})

app.put('/api/students/:id', async (req,res,next) =>{
  try {
    const instance = await models.Student.findByPk(req.params.id);
    Object.assign(instance, req.body);
    await instance.save();
    res.send(instance);
  }
  catch(ex){ next(ex) }
})

syncAndSeed()
  .then(app.listen(3000, ()=> console.log("Listening at port 3000")))