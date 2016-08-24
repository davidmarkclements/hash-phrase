# hash-phrase

A human readable hash function

## About

Implementation of https://github.com/fpgaminer/hash-phrase in Node,
as a module (rather than just a CLI)

## Install

```sh
npm install --save hash-phrase
```

## Example

```js
const hashPhrase = require('hash-phrase')

hashPhrase('Some Data', function (err, hash) {
  if (err) return console.error(err)
  console.log(hash) // victory populous masters billion eyes
})
```

## Usage

### require('hash-phrase')(data, opts, cb(err, result))

#### opts

##### minEntropy (Number)

Minimum required entropy (bits, default: 64)

##### dictionary (Array)

An array of words (default is an array of 10000 english words supplied with module)

##### hasher(data, cb) (Function)

A function that takes data, and calls back with a hash of that data.

Defaults to using pbkdf2 with 50000 iterations, key length of 32, with
a digest of sha256. Default is probably fine.


## CLI

```sh
$ npm install -g hash-phrase
```

```sh
$ hash-phrase "Some Data"
victory populous masters billion eyes
```

## Use Cases

With 64-bits encryption, use this for comparison but not brute-force or collision-attack resistant applications.

## Licence

MIT

## Acknowledgements

* Thanks to https://github.com/fpgaminer for the original idea and python implementation
* Sponsored by nearForm
