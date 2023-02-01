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

it('should update turns', function() {
  round.takeTurn()
  expect(round.turns).to.equal(1)
})

it('should return correct for a correct guess', function() {
  round.takeTurn()
  expect().to.equal()
})

it('should return incorrect for an incorrect guess', function() {
  round.takeTurn()
})

it('should store incorrect guesses', function() {
  round.takeTurn()
})

it('should update current card', function() {
  round.takeTurn()
})

it('', function() {
 round.calculatePercentCorrect()
})

it('', function() {
 
})





})