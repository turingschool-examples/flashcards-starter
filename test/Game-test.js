const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  var game;
  var data;
  var card1;
  var card2;
  var card3;
  var deck;

  

  beforeEach(function() {
    game = new Game();
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorit.skipe stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    data = deck.cards;

  })

  it.skip('should keep track of the current round', function() {

  });

  describe('game.start', function() {
    it('should be a function', function() {
      expect(game.start).to.be.a('function');
    });

    it.skip('should create cards from dataset', function() {
      game.start(data);
      expect(game.data[0]).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: "sea otter"});
    });

    it.skip('should store the created cards', function() {
      game.start(data);
      expect(game.cards.length).to.equal(3);
    });

    it.skip('should start a new Round', function() {
      game.start(data);
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });
  });
});