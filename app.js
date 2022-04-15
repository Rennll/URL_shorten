const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const Record = require('./models/record')
const app = express()
const PORT = 3000

// setting template and view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

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

// start and listen
app.listen(PORT, () => {
  console.log(`The website is running on http://localhost:${PORT}`)
})
