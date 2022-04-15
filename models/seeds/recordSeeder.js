const db = require('../../config/mongoose')
const Record = require('../record')
const randomChars = require('../../controllers/randomChars')

db.once('open', () => {
  Record.create([{ url: 'http://google.com', shortChars: randomChars(5) }, {
    url: 'http://facebook.com', shortChars: randomChars(5)
  }])
    .then(() => console.log('Done!'))
    .then(() => db.close())
})
