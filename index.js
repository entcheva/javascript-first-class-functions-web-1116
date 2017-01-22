function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function hi() {
    return 'yo'
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    return 'idk'
  }
}
