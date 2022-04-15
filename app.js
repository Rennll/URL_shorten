const express = require('express')
const exphbs = require('express-handlebars')

const Record = require('./models/record')
const randomChars = require('./controllers/randomChars')
require('./config/mongoose')

const app = express()
const PORT = 3000
const SHORTEN_CHARS_LEN = 5
const BASE_URL = 'http://localhost:3000/'

// setting template and view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const url = req.body.url.trim()

  Record.find({ url })
    .lean()
    .then(record => {
      if (record.length) {
        const shortChars = record[0].shortChars
        res.render('shorten', { short: BASE_URL + shortChars })
      } else {
        const shortChars = randomChars(SHORTEN_CHARS_LEN)

        Record.find({ shortChars })
          .then(record => {
            if (!record.length) {
              Record.create({ url, shortChars })
                .then(() => {
                  res.render('shorten', { short: BASE_URL + shortChars })
                })
                .catch(err => console.error(err))
            }
          })
      }
    })
    .catch(err => console.error(err))
})

app.get('/:shortChars', (req, res) => {
  const shortChars = req.params.shortChars

  Record.find({ shortChars })
    .then(record => {
      if (record.length) {
        res.redirect(record[0].url)
      } else {
        res.redirect('/')
      }
    })
})

// start and listen
app.listen(PORT, () => {
  console.log(`The website is running on http://localhost:${PORT}`)
})
