const chai = require('chai');
const expect = chai.expect;
const inquirer = require('inquirer');

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');
const util = require('../src/util');
const prototypeQuestions = data.prototypeData;


describe('Game', function() {
  const newCards = []
  for (let i = 0; i < 100; i++) {
     newCards.push({"id": i, "question": "Test question", "answers": ["true", "false"], "correctAnswer": "true"});
  };
  prototypeQuestions.unshift(newCards);

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('Should create cards and add to a deck', function() {
    const game = new Game();

    game.start();
    expect(game.currentRound.deck.cards.length).to.eql(100)
  });

  it('Should restart round with deck of only incorrect answers if above 90% correct', function() {
    const newGame = new Game();
    newGame.start();

    for (let i = 0; i < 91; i++) {
      newGame.currentRound.takeTurn("true");
    };

    for (let i = 0; i < 9; i++) {
      newGame.currentRound.takeTurn("false");
    };

    newGame.currentRound.endRound();
    expect(newGame.roundNumber).to.equal(0);
    expect(newGame.currentRound.deck.cards.length).to.equal(9);
  });

  it('Should restart round with full deck if below 90% correct', function() {
    const newGame = new Game();
    newGame.start();

    for (let i = 0; i < 50; i++) {
      newGame.currentRound.takeTurn("true");
    };

    for (let i = 0; i < 50; i++) {
      newGame.currentRound.takeTurn("false");
    };

    expect(newGame.currentRound.incorrectGuesses.length).to.equal(50);
    newGame.currentRound.endRound();
    expect(newGame.roundNumber).to.equal(0);
    expect(newGame.currentRound.deck.cards.length).to.equal(100);
  });

  it('Should move to the next deck when game ends', function() {
    const newGame = new Game();
    newGame.start();

    for (let i = 0; i < 100; i++) {
      newGame.currentRound.takeTurn("true");
    };

    newGame.currentRound.endRound(); 
    expect(newGame.roundNumber).to.equal(1);
    expect(newGame.currentRound.deck.cards.length).to.equal(30);
  });
});