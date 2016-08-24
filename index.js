const fs = require('fs')
const path = require('path')
const dict = fs.readFileSync(path.join(__dirname, 'words.txt')).toString().split('\n')
const pbkdf2 = require('crypto').pbkdf2
const bignum = require('bignum')

function hash (data, cb) { pbkdf2(data, '', 50000, 32, 'sha256', cb) }

function logarithm (y, x) { return Math.log(y) / Math.log(x) }

module.exports = function (data, opts, cb) {
  if (opts instanceof Function) {
    cb = opts
    opts = null
  }
  opts = opts || {}
  const minEntropy = opts.minEntropy || 64
  const dictionary = opts.dictionary || dict
  const hasher = opts.hasher || hash
  const len = dictionary.length
  const entropyPerWord = logarithm(len, 2)
  var words = Math.ceil(minEntropy / entropyPerWord)

  hasher(data, function (err, h) {
    if (err) {
      cb(err)
      return
    }
    const entropyAvailable = h.length * 4
    if (words * entropyPerWord > entropyAvailable) {
      cb(Error('Output entropy of hasher function is too small'))
      return
    }
    const phrase = []
    var remainder
    h = bignum.fromBuffer(h)

    while (words--) {
      remainder = h.mod(len).toNumber()
      h = h.div(len)
      phrase.push(dictionary[remainder])
    }

    cb(null, phrase.join(' '))
  })
}
