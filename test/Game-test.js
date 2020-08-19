let chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  beforeEach((done) => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn();
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round);
    done();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should keep track of the round', function() {
    game.start();
    let testDeck = game.generateDeck()
    let testRound = new Round(testDeck)
    expect(game.currentRound.deck).to.eql(testRound.deck);
  }); 

  it('should generate a deck', function() {
    let testDeck = game.generateDeck().deck.length;
    let dataLength = prototypeQuestions.length;
    expect(testDeck).to.eql(dataLength)
  }); 


});