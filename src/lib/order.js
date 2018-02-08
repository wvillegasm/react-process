'use strict'

function isInStock(sku, qty) {
  return sku === 'AAA'

}

function orderItem(sku, quantity, complete) {
  complete = complete || function() {}
  if (isInStock(sku, quantity)) {
    console.log(`ordering ${quantity} of item # ${sku}`)
    complete()
    return true
  } else {
    console.log(`there are not ${quantity} of item # ${sku} in stock`)
    console.log(`there are not ${quantity} of item # ${sku} in stock`)
    console.log(`there are not ${quantity} of item # ${sku} in stock`)
    complete()
    return false
  }
}

module.exports = exports = {
  orderItem,
}
