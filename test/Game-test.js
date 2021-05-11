const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', () => {
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('Should keep track of the currentRound', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const game = new Game(round);
    expect(game.currentRound).to.deep.equal(round);
  }); 

  it('start method creates cards, puts cards in deck, creates a new Round using the Deck, and invokes printMessage & printQuestion', () => {
    const game = new Game();
    game.start();
  }); 
});