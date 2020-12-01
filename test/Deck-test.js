const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Deck', function () {

  it('should be a function', function () {
    const deck = new Deck()
    const card = new Card(1, "The question", ["ans1", "ans2"], "ans2")
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function () {
    const card = new Card(1, "The question", ["ans1", "ans2"], "ans2")
    const deck = new Deck()
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should have an array of cards', function () {
    const card = new Card(1, "The question", ["ans1", "ans2"], "ans2")

    const deck = new Deck()
    expect(deck.currentDeck).to.be.an('array')
  })

  it('should have cards in the deck', function () {
    const card = new Card(1, "The question", ["ans1", "ans2"], "ans2")
    const deck = new Deck()
    expect(deck.currentDeck[0]).to.be.an('object')
  })

})