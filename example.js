const hashPhrase = require('./')

hashPhrase('Some Data', function (err, hash) {
  if (err) return console.error(err)
  console.log(hash) // victory populous masters billion eyes
})
