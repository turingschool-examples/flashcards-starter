const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should make sure the guess is returned when returnGuess() is called', () => {
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.be.equal('object');
  });  

  it('should make sure a card is returned when returnCard() is called', () => {
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.be.equal(card);
  });  

  it('should return true if guess is equal to cards correct answer', () => {
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.be.equal(true);
  });

  it('should return false is guess is not equal to cards correct answer', () => {
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.be.equal(false);
  });

  it('should say correct if guess was correct', () => {
    const turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.be.equal('correct!');
  });

  it('should say incorrect if guess was incorrect', () => {
    const turn = new Turn('array', card);
    expect(turn.giveFeedback()).to.be.equal('incorrect!');
  });

});