const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/turn');

describe('Turn', function() {
  let card, turn;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  describe('check evaluate the guess', function() {

    it('should evaluate guess correct', function() {
      expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should evaluate guess incorrect', function() {
      const turn2 = new Turn('array', card);
      expect(turn2.evaluateGuess()).to.equal(false);
    });
  });

  it('should return the card', function() {
    expect(turn.returnCard(card)).to.equal(card);
  });

  describe('check answers on giveFeedback', function() {

    it('should give correct feedback', function() {
      expect(turn.giveFeedback()).to.equal('YAAS');
    });

    it('should give incorrect feedback', function() {
      const turn = new Turn('array', card);
      expect(turn.giveFeedback()).to.equal('FAIL');
    });
  });
});
