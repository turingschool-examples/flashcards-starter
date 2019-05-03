const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });
  
  it('should keep track of current round', function() {
    const cards = prototypeQuestions.map(function(element){
      let card = new Card(element.id, element.question, element.answers, element.correctAnswer)
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game();
    expect(game.currentRound).to.eql({});
    game.start();
    expect(game.currentRound).to.eql(round);
  });

  it('should start a game', function() {
    const game = new Game();
    game.start();
  });
  
});