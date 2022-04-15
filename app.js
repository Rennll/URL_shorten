const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const Record = require('./models/record')
const randomChars = require('./controllers/randomChars')
const app = express()
const PORT = 3000
const SHORTEN_CHARS_LEN = 5
const BASE_URL = 'http://localhost:3000/'

// setting template and view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

// setting database by mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => {
  console.log('MongoDB connected!')
})

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const url = req.body.url

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

// start and listen
app.listen(PORT, () => {
  console.log(`The website is running on http://localhost:${PORT}`)
})
