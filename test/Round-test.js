const chai = require("chai");
const expect = chai.expect;

const { testData } = require("../src/testData")
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
const Round = require("../src/Round");

describe("Round", () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(testData[0].id,testData[0].question,testData[0].answers,testData[0].correctAnswer)
    card2 = new Card(testData[1].id,testData[1].question,testData[1].answers,testData[1].correctAnswer)
    card3 = new Card(testData[2].id,testData[2].question,testData[2].answers,testData[2].correctAnswer)
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })


  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of round', () => {
    expect(round).to.be.instanceof(Round)
  })

  it('should return the current card in deck', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should start with a count of 0', () => {
    expect(round.turns).to.equal(0)
  })

  it('should store wrong answers in an array', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
    round.takeTurn("map()")
    expect(round.incorrectGuesses).to.deep.equal([6])
  })

  it('should increment turn count each time the user takes a turn', () => {
    round.takeTurn("banana")
    expect(round.turns).to.equal(1)
    round.takeTurn("pajama")
    expect(round.turns).to.equal(2)
  })

  it('should not store right answers', () => {
    round.takeTurn("sort()")
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should give feedback for correct guesses', () => {
    expect(round.takeTurn("sort()")).to.equal("You right")
  })

  it('should give feedback for incorrect guesses', () => {
    expect(round.takeTurn("map")).to.equal("You wrong")
  })

  it('should make next card the current card', () => {
    round.takeTurn("sort()")
    expect(round.returnCurrentCard()).to.equal(card2)
  })

  it('should calculate percent of correct guesses', () => {
    round.takeTurn("sort()")
    round.takeTurn("splice()")
    round.takeTurn("currentElement")
    expect(round.calculatePercentage()).to.equal(67)
  })
})
