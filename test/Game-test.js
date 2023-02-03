const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')


describe('Game', function() {
  let currentGame 

beforeEach(function () {
  currentGame = new Game()
})

it('should be a function', function() {
  expect(Game).to.be.a('function')
})

it('should be an instance of Game', function() {
  expect(currentGame).to.be.an.instanceof(Game);
})

it('should keep track of current round', function() {
  expect(currentGame.currentRound).to.equal(this.currentRound)
})

it('should keep track of current Deck', function() {
  currentGame.createRound()
  expect(currentGame.currentDeck).to.be.an.instanceof(Deck)
})

it('should keep track of current Round', function() {
  currentGame.createRound()
  expect(currentGame.currentRound).to.be.an.instanceof(Round)
})

it('should create Cards', function() {
  expect(currentGame.createCards()[0]).to.be.an.instanceof(Card)
})

it('should create a deck', function() {
 expect(currentGame.createDeck()).to.be.an.instanceof(Deck)
})





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



