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
    turn = new Turn('object',card);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card);
    round.takeTurn('turn');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should have turns', () => {
    round.takeTurn('guess');
    expect(round.turns).to.equal(1);
  });

  it('should have incorrect guesses', () => {
    expect(round.incorrectGuesses).to.eql([]);
  });

  it('should push incorrect guesses into array by id', () => {
    round.takeTurn('array')
    round.takeTurn('object')
    expect(round.incorrectGuesses).to.eql([1,2]);
  });

  it('give feedback on each turn', () => {
    round.takeTurn('object')
    round.takeTurn('array')
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should be able to calculate percentage correct', () => {
    round.takeTurn('object')
    round.takeTurn('array')
    round.takeTurn('foster')
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.eql(67);
  });

  it('should print message to console at end of round', () => {
    round.takeTurn('object')
    round.takeTurn('array')
    round.takeTurn('foster')
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal('Round over! You answered 67% of the questions correctly!')
  });
});


