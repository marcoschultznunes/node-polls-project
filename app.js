const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./db')

let app = express()

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

const pollsRoutes = require('./routes/polls')
app.use('/polls', pollsRoutes)
app.get('/', (req, res) => {  // Main page redirects to polls
    res.redirect('/polls')
})
app.use((req, res) => {  // 404 pages
    res.status(404).render('notFound')  
})

db.sync().then(result => {
    console.log('DB online')
}).catch(err => {
    console.log(err)
    app = null
})

module.exports = app
