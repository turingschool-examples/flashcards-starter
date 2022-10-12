const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', () => {

  let card1
  let card2
  let card3
  let deck
  let round

  beforeEach(() => {
    card1 = new Card(1, 'What is the capital of Texas?', ['Austin', 'Houston', 'Dallas'], 'Austin')
    card2 = new Card(2, 'What is the capital of Louisiana?', ['New Orleans', 'Lafayette', 'Lake Charles'], 'New Orleans')
    card3 = new Card(3, 'What is the capital of Colorado?', ['Boulder', 'Denver', 'Aspen'], 'Denver')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should store the first card as the current card from the Deck', () => {
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: 'What is the capital of Texas?',
      answers: [ 'Austin', 'Houston', 'Dallas' ],
      correctAnswer: 'Austin'
    })
  })

  it('should return the current card being played with the method returnCurrentCard()', () => {
    expect(round.returnCurrentCard()).to.deep.equal({
      id: 1,
      question: 'What is the capital of Texas?',
      answers: [ 'Austin', 'Houston', 'Dallas' ],
      correctAnswer: 'Austin'
    })
  })

  it('should store the deck', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it('should have a default turns count of 0', () => {
    expect(round.turns).to.equal(0)
  })

  it('should have a default empty array for incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should increase the turns count by one with the method takeTurn()', () => {
    round.takeTurn()
    expect(round.turns).to.equal(1)
    round.takeTurn()
    round.takeTurn()
    expect(round.turns).to.equal(3)
  })

  it('should update the current card to the next card with the method takeTurn()', () => {
    round.takeTurn()
    expect(round.currentCard).to.deep.equal({
      id: 2,
      question: 'What is the capital of Louisiana?',
      answers: [ 'New Orleans', 'Lafayette', 'Lake Charles' ],
      correctAnswer: 'New Orleans'
    })
    round.takeTurn()
    expect(round.currentCard).to.deep.equal({
      id: 3,
      question: 'What is the capital of Colorado?',
      answers: [ 'Boulder', 'Denver', 'Aspen' ],
      correctAnswer: 'Denver'
    })
  })

  it('should store incorrect guesses via the ID in the incorrect Guesses array with the method takeTurn()', () => {
    round.takeTurn('Austin')
    expect(round.incorrectGuesses).to.deep.equal([])
    round.takeTurn('Lafayette')
    expect(round.incorrectGuesses).to.deep.equal([2])
    round.takeTurn('Boulder')
    expect(round.incorrectGuesses).to.deep.equal([2, 3])
  })

  it('should return feedback regarding whether the guess is correct or incorrect with the method takeTurn()', () => {
    expect(round.takeTurn('Austin')).to.equal('Correct!')
    expect(round.takeTurn('Lake Charles')).to.equal('Incorrect!')
  })

  it('should calculate and return the percentage of correct guesses with the method calculatePercentCorrect()', () => {
    
    expect(round.calculatePercentCorrect()).to.equal(0)
    round.takeTurn('Austin')
    round.takeTurn('Lake Charles')
    expect(round.calculatePercentCorrect()).to.equal(50)
    round.takeTurn('Denver')
    expect(round.calculatePercentCorrect()).to.equal(67)
  })

  it('should print the following to the console: "** Round over! ** You answered <>% of the questions correctly!"', () => {
    round.takeTurn('Houston')
    round.takeTurn('Lake Charles')
    round.takeTurn('Denver')
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })
})