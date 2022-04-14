const express = require('express')

const app = express()
const PORT = 3000

// setting routes
app.get('/', (req, res) => {
  res.send('Will be Website')
})

// start and listen
app.listen(PORT, () => {
  console.log(`The website is running on http://localhost:${PORT}`)
})
