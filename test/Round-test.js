const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  let card;
  let turn;
  let deck;
  let round;

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

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card);
  });
});


