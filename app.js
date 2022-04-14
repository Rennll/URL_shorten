const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

// setting database by mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => {
  console.log('MongoDB connected!')
})

// setting routes
app.get('/', (req, res) => {
  res.send('Will be Website')
})

// start and listen
app.listen(PORT, () => {
  console.log(`The website is running on http://localhost:${PORT}`)
})
