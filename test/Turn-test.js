const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')
const Deck = require("../src/Deck.js");

describe('Turn', function() {

  it('should take in a guess', function() {
    let firstTurn = new Turn('pig')
    expect(firstTurn.guess).to.equal('pig')
  })

  it('should take in a new instantiation of Card Class', function() {
    const card = new Card()
    let firstTurn = new Turn('pig', card)
    expect(firstTurn.card).to.equal(card)
  })

  it('should create a method that returns the geuss', function() {
    const card = new Card()
    const firstTurn = new Turn('pig', card)
    expect(firstTurn.returnGuess()).to.equal('pig')
  })

  it('should have a method that returns the card', function() {
    const card = new Card()
    const firstTurn = new Turn('pig', card)
    expect(firstTurn.returnCard()).to.equal(card)
  })

  it('should have a method that return if users guess is correct or not', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const firstTurn = new Turn('sea otter', card)
    const secondTurn = new Turn('pug', card)
    expect(firstTurn.evaluateGuess()).to.equal(true)
    expect(secondTurn.evaluateGuess()).to.equal(false)
  })

  it('should have a method that returns incorrect or correct based on the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const firstTurn = new Turn('sea otter', card)
    const secondTurn = new Turn('pug', card)
    expect(firstTurn.giveFeedback()).to.equal('correct!')
    expect(secondTurn.giveFeedback()).to.equal('incorrect!')
  })

})
