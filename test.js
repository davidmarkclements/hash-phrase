const test = require('tap').test
const hashPhrase = require('./')

test('should create a phrase from some input data', function (t) {
  t.plan(4)
  hashPhrase('test', function (err, result) {
    t.error(err)
    t.is(result, 'additionally discussions step reason increase')
  })
  hashPhrase('test2', function (err, result) {
    t.error(err)
    t.is(result, 'party dancing daisy enabling van')
  })
})

test('should consistently create the same from input data', function (t) {
  hashPhrase('test', function (err, result) {
    t.error(err)
    t.is(result, 'additionally discussions step reason increase')
    hashPhrase('test', function (err, result) {
      t.error(err)
      t.is(result, 'additionally discussions step reason increase')
      t.end()
    })
  })
})


test('should error if minEntropy exceeds entropy afforded by dictionary', function (t) {
  hashPhrase('test', function (err, result) {
    t.error(err)
    t.is(result, 'additionally discussions step reason increase')
    hashPhrase('test', function (err, result) {
      t.error(err)
      t.is(result, 'additionally discussions step reason increase')
      t.end()
    })
  })
})