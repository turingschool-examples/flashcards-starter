const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')


describe('Game', function() {
  let firstCard 
  let secondCard
  let thirdCard 
  let deck 
  let round 
  let currentGame 

beforeEach(function () {
  firstCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  secondCard = new Card(8, 'Which array prototype is not an accessor method?', ["join()", "slice()", "splice()"], "splice()" )
  thirdCard = new Card(11,'Which iteration method returns a new array with all elements that match a given condition?', ["filter()", "find()", "map()"], "filter()") 
  deck = new Deck([firstCard, secondCard, thirdCard])
  round = new Round(deck)
  currentGame = new Game(round)
})


it('should be a function', function() {
  expect(Game).to.be.a('function')
})

it('should be an instance of Game', function() {
  expect(currentGame).to.be.an.instanceof(Game);
})

it('should keep track of current round', function() {
  expect(currentGame.currentRound).to.equal(round)
})

// it('', function() {
//   expect().to.equal()
// })

// it('', function() {
//   expect().to.equal()
// })

// it('', function() {
//   expect().to.equal()
// })

// it('', function() {
//   expect().to.equal()
// })

// it('', function() {
//   expect().to.equal()
// })



})
