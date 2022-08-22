const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should store a user guess and the current card in play', () => {
    const currentCard = new Card((1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    const turn = new Turn('object', currentCard);

    expect(turn.guess).to.equal('object');
    expect(turn.currentCard).to.equal(currentCard);
  })

  it('should return the user guess', () => {
    const currentCard = new Card((1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    const turn = new Turn('object', currentCard);

    expect(turn.returnGuess())
  })
});
