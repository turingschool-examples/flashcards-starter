const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', function () {
  let deck, card1, card2

  beforeEach(function () {
    card1 = new Card(1, "A good question", ["ans1", "ans2"], "ans2")
    card2 = new Card(2, "A better question", ["ans4", "ans5"], "ans4")
    deck = new Deck()
  })

  it.skip('should be a function', function () {
    expect(Deck).to.be.a('function')
  })

  it.skip('should be an instance of Deck', function () {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it.skip('should have an array of cards', function () {
    expect(deck.currentDeck).to.be.an('array')
  })

  it.skip('should have cards in the deck', function () {
    deck.createDeck(card1)
    deck.createDeck(card2)
    expect(deck.currentDeck[0]).to.deep.equal({
      cardId: 1,
      question: "A good question",
      answers: ["ans1", "ans2"],
      correctAnswer: "ans2",
    })
    expect(deck.currentDeck[1]).to.deep.equal({
      cardId: 2,
      question: "A better question",
      answers: ["ans4", "ans5"],
      correctAnswer: "ans4",
    })
  })

  it.skip('should know how many cards there are', function () {
    deck.createDeck(1, "A good question", ["ans1", "ans2"], "ans2")
    deck.createDeck(2, "A better question", ["ans4", "ans5"], "ans4")
    expect(deck.currentDeck).to.have.length(2)
  })

})