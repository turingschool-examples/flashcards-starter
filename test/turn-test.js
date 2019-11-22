const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let turn;
  let card;

  beforeEach(() => {
    card = new Card(1,
      'What allows you to define a set of related information using key-value'
      + ' pairs?',
      ['object', 'array', 'function'],
      'object')
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should have a method called returnGuess', function() {
    expect(turn.returnGuess()).to.equal('object')
  });

  it('should have a method called returnCard', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  describe('turn.evaluateGuess()', function() {

    it('should have a method called evaluateGuess', function() {
      expect(turn.evaluateGuess('hi', card)).to.equal(false);
    });

    it('should return true if the guess is correct', function() {
      expect(turn.evaluateGuess('object', card)).to.equal(true);
    });
  });

  describe('turn.giveFeedback()', function() {

    it('should have a method called giveFeedback', function() {
      expect(turn.giveFeedback('object', card)).to.equal('correct!');
    });

    it('should return incorrect if wrong', function() {
      const incorrectTurn = new Turn('hi', card);
      expect(incorrectTurn.giveFeedback('hi', card)).to.equal('incorrect!');
    });
  });
});
