const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase()
const numbers = '1234567890'

function generateRandom (num) {
  // setting collections
  const collections = (lowerCaseLetters + upperCaseLetters + numbers).split('')

  // randomly take letter form collections by num times
  let letters = ''
  for (let i = 0; i < num; i++) {
    letters += collections[Math.floor(Math.random() * collections.length)]
  }

  return letters
}

module.exports = generateRandom
