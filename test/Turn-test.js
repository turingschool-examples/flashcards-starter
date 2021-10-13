const expect = require('chai').expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should make a guess from current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    
    expect(turn.guess).to.equal('array');
    expect(turn.currentCard).to.be.an.instanceOf(Card);
  });

  it.skip('should return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.returnGuess()).to.equal('array');
  });

  it.skip('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
 
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should evaluate if guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
  
    const result = turn.evaluateGuess();

    expect(result).to.equal(true);
  });
});