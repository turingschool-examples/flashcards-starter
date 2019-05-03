const chai = require('chai');
const expect = chai.expect;


const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Round = require('../src/Round');
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    const game = new Game();
    game.createCards()
    expect(game.currentRound).to.eql(prototypeQuestions);
  })

  it("should return new deck with the number of cards", function() {
    const deck = new Deck(prototypeQuestions);
    expect(deck.cards).to.eql(prototypeQuestions);
  });

});