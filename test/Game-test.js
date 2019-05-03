const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Round = require('../src/Round')
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game()
    game.start()
  })   

  it('should have a start function', function() {
    expect(game.start).to.be.a('function')
  });

  it('should be an instace of Game', function() {
    expect(game).to.be.an.instanceOf(Game)
  });

  it('should defualt the deck to the first set of prototypeQuestion', function() {
    expect(game.currentRound.deck.cards.length).to.equal(30)
  });

  it('should be able to take deck argument in the start function', function() {
    const game1 = new Game();
    const newDeck = [  
      { "id": 1, "question": "first question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 1"},   
      { "id": 2, "question": "second question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 2"},   
      { "id": 3, "question": "third question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 3" },   
      { "id": 4, "question": "fourth question", "answers": ["answer 1", "answer 2", "answer 3"], "correctAnswer": "answer 1"}]
    game1.start(newDeck)
    expect(game1.currentRound.deck.cards.length).to.equal(4)
  });

  it('should change decks if all answers are correct', function() {
    expect(game.currentRound.deck.cards.length).to.equal(30)
    game.currentRound.takeTurn('object')
    expect(game.currentRound.calculatePercentCorrect()).to.equal(100)
    game.currentRound.endRound()
    expect(game.currentRound.deck.cards.length).to.equal(4)
  });

  it('should return the current deck if below 90%', function() {
    expect(game.currentRound.deck.cards.length).to.equal(30)
    game.currentRound.takeTurn('object')
    game.currentRound.takeTurn('my guess')
    expect(game.currentRound.calculatePercentCorrect()).to.equal(50)
    game.currentRound.endRound()
  })
})