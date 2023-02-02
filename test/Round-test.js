const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', function() {
  var firstCard
  var secondCard
  var thirdCard
  var deck
  var round

  beforeEach(function () {
  firstCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  secondCard = new Card(8, 'Which array prototype is not an accessor method?', ["join()", "slice()", "splice()"], "splice()" )
  thirdCard = new Card(11,'Which iteration method returns a new array with all elements that match a given condition?', ["filter()", "find()", "map()"], "filter()") 
  deck = new Deck([firstCard, secondCard, thirdCard])
  round = new Round(deck)
})

it('should be a function', function() {
  expect(Round).to.be.a('function')
})

it('should be an instance of Deck', function() {
  expect(round).to.be.an.instanceof(Round);
})

it('should hold a deck', function() {
  expect(round.deck).to.deep.equal(deck)
})

it('should have the current card be the first card in the deck', function() {
  expect(round.currentCard).to.deep.equal(firstCard)
})

it('should start with zero turns', function() {
  expect(round.turns).to.equal(0)
})

it('should start with an empty array', function() {
  expect(round.incorrectGuesses).to.deep.equal([])
})

it('should return the current card in play', function() {
  const current = round.returnCurrentCard()
  expect(current).to.equal(firstCard)
})

it('should update turns with a correct guess', function() {
  round.takeTurn('object')
  expect(round.turns).to.equal(1)
})

it('should update turns with an incorrect guess', function() {
  round.takeTurn('array')
  expect(round.turns).to.equal(1)
})

it('should return correct for a correct guess', function() {
  expect(round.takeTurn('object')).to.equal('Correct!')
})

it('should return incorrect for an incorrect guess', function() {
  expect(round.takeTurn('array')).to.equal('Incorrect!')
})

it('should store incorrect guesses', function() {
  round.takeTurn('array')
  expect(round.incorrectGuesses.length).to.equal(1)
})

it('should update current card', function() {
  round.takeTurn('array')
  expect(round.currentCard).to.deep.equal(secondCard)
})

it('should calculate 100 if all answered right', function() {
 round.takeTurn('object') 
 expect(round.calculatePercentCorrect()).to.equal(100)
})

it('should calculate 0 if none are answered right', function() {
  round.takeTurn('array') 
  expect(round.calculatePercentCorrect()).to.equal(0)
 })

 it('should calculate 50 if half are answered right', function() {
  round.takeTurn('array') 
  round.takeTurn( "splice()") 
  expect(round.calculatePercentCorrect()).to.equal(50)
 })

it('should tell you what percentage you answered right',function() {
  round.takeTurn('object')
  round.calculatePercentCorrect()
  expect(round.endRound()).to.equal(`Round over! ** You answered ${100} % of the questions correctly!`)
})
})