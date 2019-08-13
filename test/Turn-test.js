const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  });

  it('should store an object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.deep.equal(card);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

    it('should return a boolean', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn1 = new Turn('object', card);
      const turn2 = new Turn('array', card);

      turn1.evaluateGuess();
      turn2.evaluateGuess();

      expect(turn1.evaluateGuess()).to.equal(true);
      expect(turn2.evaluateGuess()).to.equal(false);
    });

      //passing above
    it('should give feedback', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn1 = new Turn('object', card);
      const turn2 = new Turn('array', card);

      turn1.evaluateGuess();
      turn2.evaluateGuess();

      expect(turn1.giveFeedback()).to.equal('correct!');
      expect(turn2.giveFeedback()).to.equal('incorrect!');

    });

});
