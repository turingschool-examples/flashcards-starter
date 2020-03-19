const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('object', card);
    expect(turn.guess).to.equal('object');
  });

  it('should take a card', function() {
    const turn = new Turn('object', card);
    expect(turn.card).to.be.an.instanceof(Card);
    expect(turn.card).to.equal(card);
  });

  it('should return a guess', function() {
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card', function() {
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should check is guess matches correct answer', function() {
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return ‘incorrect!’ or ‘correct!‘', function() {
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
