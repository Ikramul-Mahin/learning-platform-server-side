const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const categories = require('./data/categories.json')
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const categoryCourse = courses.find(n => n.category_id === id)
    res.send(categoryCourse)
})


const courses = require('./data/courses.json')
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.find(c => c.category_id == id)
    console.log(selectedCourse)
    res.send(selectedCourse)

})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})