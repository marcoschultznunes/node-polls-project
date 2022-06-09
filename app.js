const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.status(404).render('notFound')
})

module.exports = app
