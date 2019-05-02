const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Round = require('../src/Round')
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Game', function() {

  it('should have a start function', function() {
    const game = new Game()
    expect(game.start).to.be.a('function')
  });

  it('the current round should be an instance of Round', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.a('object')
    expect(game.currentRound).to.be.an.instanceOf(Round)
  });

  it('should defualt the deck to the first set of prototypeQuestion', function() {
    const game = new Game();
    game.start()
    expect(game.currentRound.deck.cards.length).to.equal(30)
  })

  it('should be able to take deck argument in the start function', function() {
    const game = new Game();
    const newDeck = [  
      { "id": 1, "question": "first question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 1"},   
      { "id": 2, "question": "second question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 2"},   
      { "id": 3, "question": "third question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 3" },   
      { "id": 4, "question": "fourth question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 1"}]
    game.start(newDeck)
    expect(game.currentRound.deck.cards.length).to.equal(4)
  })
})