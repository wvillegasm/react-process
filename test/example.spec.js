'use strict'

const orderMod = rewire('../../src/lib/order.js')

describe('src/lib/order - sinon example for orderItem', function() {

  //this.timeout(9000)

  beforeEach(() => {

    this.testData = [
      {
        sku: 'AAA',
        qty: 10,
      },
      {
        sku: 'BBB',
        qty: 0,
      },
      {
        sku: 'CCC',
        qty: 4,
      },
    ]

    this.consoleMock = {
      log: sinon.spy(),
    }
    

    orderMod.__set__('console', this.consoleMock)

  })

  it('order an item when there are enough in stock', (done) => {

    orderMod.orderItem('AAA', 3, () => {
      expect(this.consoleMock.log.callCount)
        .to
        .equal(1)
      done()
    })

    orderMod.orderItem('CCC', 2, () => {
      expect(this.consoleMock.log.callCount)
        .to
        .equal(3)
    })

  })

})
