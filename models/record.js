const mongoose = require('mongoose')
const Schema = mongoose.Schema

const record = new Schema({
  url: {
    type: String
  },
  shortChars: {
    type: String
  }
})

module.exports = mongoose.model('Record', record)
