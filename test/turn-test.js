const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/turn');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should evaluate the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    // const turn3 = new Turn('function', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard(card)).to.equal(card);
  });

  describe('check answers', function() {

    it('should give correct feedback', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      // const turn2 = new Turn('array', card);
      // const turn3 = new Turn('function', card);
      expect(turn.giveFeedback()).to.equal('YAAS');
      // expect(turn2.giveFeedback()).to.equal('FAIL');
      // expect(turn3.giveFeedback()).to.equal('FAIL');
    });

    it('should give incorrect feedback', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      // const turn1 = new Turn('object', card);
      const turn = new Turn('array', card);
      // const turn3 = new Turn('function', card);
      // expect(turn1.giveFeedback()).to.equal('YAAS QUEEN');
      expect(turn.giveFeedback()).to.equal('FAIL');
      // expect(turn3.giveFeedback()).to.equal('FAIL');
    });
  });
});
