const mongoose = require('mongoose')
const Record = require('../record')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => {
  console.log('MongoDB connected!')

  Record.create([{ URL: 'http://google.com', short_chars: 'googl' }, {
    URL: 'http://facebook.com', short_chars: 'facbk'
  }])
  console.log('Done!')
})
