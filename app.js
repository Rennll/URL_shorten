const express = require('express')
const exphbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = 3000

// setting template and view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// using express-bodyParser, static file, routes
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

// start and listen
app.listen(PORT, () => {
  console.log(`The website is running on http://localhost:${PORT}`)
})
