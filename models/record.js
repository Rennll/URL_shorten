const mongoose = require('mongoose')
const Schema = mongoose.Schema

const record = new Schema({
  URL: {
    type: String,
    unique: true
  },
  short_chars: {
    type: String,
    unique: true
  }
})

module.exports = mongoose.model('Record', record)
