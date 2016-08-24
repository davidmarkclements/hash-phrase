#!/usr/bin/env node

require('./')(process.argv[2], function (err, hash) {
  if (err) return console.error(err)
  console.log(hash)
})
