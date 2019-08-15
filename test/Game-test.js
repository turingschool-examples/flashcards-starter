const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', () => {

  let card;
  let turn;
  let deck;
  let round;
  let game;

  beforeEach(() => {
    card = new Card({
      'id':1, 
      'question':'What allows you to define a set of related information using key-value pairs?', 
      'answers':['object', 'array', 'function'],
      'correctAnswer': 'object'});
    card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"});
    card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"});
    
    deck = new Deck([card, card2, card3]);
    turn = new Turn('object',card);
    round = new Round(deck);
    game = new Game();
  }); 

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game',() => {
      const game = new Game();
      expect(game).to.be.an.instanceOf(Game)
  });

  it('should know what is current round',() => {
    game.start();
    game.start();
      expect(game.currentRound).to.equal(2)
  });

});

