const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase()

function generateRandom (num) {
  // setting collections
  const collections = (lowerCaseLetters + upperCaseLetters).split('')

  // randomly take letter form collections by num times
  let letters = ''
  for (let i = 0; i < num; i++) {
    letters += collections[Math.floor(Math.random() * collections.length)]
  }

  return letters
}

module.exports = generateRandom
