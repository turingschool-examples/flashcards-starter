const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')

describe('Deck', function () {
  let deck

  beforeEach(function () {
    deck = new Deck()
  })

  it('should be a function', function () {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function () {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should have an array of cards', function () {
    expect(deck.currentDeck).to.be.an('array')
  })

  it('should have cards in the deck', function () {
    deck.createDeck(1, "A good question", ["ans1", "ans2"], "ans2")
    deck.createDeck(2, "A better question", ["ans4", "ans5"], "ans4")
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

  it('should know how many cards there are', function () {
    deck.createDeck(1, "A good question", ["ans1", "ans2"], "ans2")
    deck.createDeck(2, "A better question", ["ans4", "ans5"], "ans4")
    expect(deck.currentDeck).to.have.length(2)
  })

})