const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {
  let card1;
  let card2;
  let deck;
  let round;
  let game;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    deck = new Deck ([card1, card2]);
    round = new Round(deck);
    game = new Game(round);
  })
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  }); 

});