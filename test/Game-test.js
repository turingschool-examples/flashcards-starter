const chai = require('chai');
const expect = chai.expect;

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
    // const turn = new Turn;
    // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
    const game = new Game;
    game.start();
    expect(game.currentRound).to.equal(1);
  })
})
