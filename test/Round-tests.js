const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Turn = require('../src/turn')
const Round = require('../src/Round')

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let turn;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(2, 'What is the Beth\'s favortie food', ['tacos', 'burritos', 'pizza'], 'pizza')
    card3 = new Card(3, 'What is the best day of the week', ['monday', 'tuesday', 'friday'], 'friday')
    deck = new Deck([card1, card2, card3])
    turn = new Turn('pizza', card1)
    round = new Round(deck)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be a new instance of Round', () => {
    expect(round).to.be.instanceof(Round)
  })

  it('should have a deck of cards', () => {
    expect(round.deck).to.be.equal(deck)
  })

  it('should be able to record number of turns', () => {
    expect(round.turn).to.be.equal(0)
  })

  it('should return the first card in the deck', () => {
    expect(round.returnCurrentCard()).to.be.equal(card1)
  })

  it('should be able to store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should count the number of turns', () => {
    round.takeTurn('puppy')
    expect(round.turn).to.equal(1)
  })

  it('should be a new instance of turn', () => {
    expect(round.takeTurn('pug')).to.be.equal('incorrect!')
    expect(round.takeTurn('pizza')).to.be.equal('correct!')
  })

  it('should store incorrect guesses id in an array', () => {
    round.takeTurn('pug')
    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should store correct guesses id in an array', () => {
    round.takeTurn('sea otter')
    round.takeTurn('pizza')
    expect(round.correctGuesses).to.deep.equal([1, 2])

  })

  it('should calculate a winning percentage', () => {
    round.takeTurn('sea otter')
    round.takeTurn('pizza')

    expect(round.calculatePercentage()).to.equal(100)
  })

  it('should calculate a different percentage', () => {
    round.takeTurn('too')
    round.takeTurn('pizza')
    expect(round.calculatePercentage()).to.equal(50)
  })
  it('should return a message when the round is over', () => {
    round.takeTurn('sea otter')
    round.takeTurn('burrito')
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
  })

})
