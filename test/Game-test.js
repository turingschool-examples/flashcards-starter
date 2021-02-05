const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  it("should be a function", function() {
    const game = new Game;
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const game = new Game;
    expect(game).to.be.an.instanceof(Game);
  });

  it('should increase current round by 1 after instance of round', function() {
    const game = new Game;
    game.start();
    expect(game.currentRound).to.equal(1);
  });

  it('should create cards', function() {
    const game = new Game();
    let createdCards = game.createCards();

    expect(createdCards.length).to.equal(prototypeQuestions.length)

    for(var i=0;i<createdCards.length;i++) {
      expect(createdCards[i].question).to.equal(prototypeQuestions[i].question)
    }
  });


})
