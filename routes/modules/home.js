const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const randomChars = require('../../controllers/randomChars')

const SHORTEN_CHARS_LEN = 5

// setting index
router.get('/', (req, res) => {
  res.render('index')
})

// setting route for shorten url
router.post('/', (req, res) => {
  const url = req.body.url.trim()
  // 首先查看是否已經轉換過
  // 有 -> 把搜尋到的短網址渲染到結果頁
  // 沒有 -> 進入 do ... while
  //        先產生新的短網址
  //        如果新的網址不存在
  //        -> 則創造一個新的 record
  //          -> 儲存在之後再執行渲染，並脫離迴圈
  Record.findOne({ url })
    .lean()
    .then(record => {
      const shortChars = record.shortChars
      res.render('shorten', { short: process.env.BASE_URL + shortChars })
    })
    .catch(async () => {
      try {
        let needsLooping = true
        let shortChars = ''
        while (needsLooping) {
          shortChars = randomChars(SHORTEN_CHARS_LEN)
          const isExists = await Record.exists({ shortChars })
          if (!isExists) needsLooping = false
        }
        const record = await Record.create({ url, shortChars })
        res.render('shorten', { short: process.env.BASE_URL + record.shortChars })
      } catch (err) {
        console.error(err)
      }
    })
})

// setting shorten url as params
router.get('/:shortChars', (req, res) => {
  const shortChars = req.params.shortChars

  // 尋找使用者提供的短網址
  // 若有則渲染，沒有就重新回到根目錄
  Record.findOne({ shortChars })
    .then(record => res.redirect(record.url))
    .catch(() => res.redirect('/'))
})

module.exports = router
