const cards = require('../src/data')
const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards} = require('../src/deck');

describe('deck', function() {
  it('should create a deck of cards and count them', function () {
    const deck = createDeck(cards.prototypeData)

    expect(countCards(deck)).to.deep.equal(30)
  })
})

