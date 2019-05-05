const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game')


describe('Game', function() {

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should start the game and keep track of the current round', function() {
    const cards = prototypeQuestions.map(function(el) {
      const card = new Card(el.id, el.question, el.answers, el.correctAnswer)
      return card;
    })
    const deck = new Deck(cards)
    const round = new Round(deck) 
    const game = new Game();
    expect(game.currentRound).to.eql({});
    game.start();
    expect(game.currentRound).to.eql(round);
  });



});