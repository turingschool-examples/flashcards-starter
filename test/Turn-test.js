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

  it('should return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    const guess = turn.returnGuess();

    expect(guess).to.equal('array');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
 
    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  it('should evaluate if guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
  
    const result = turn.evaluateGuess();

    expect(result).to.equal(true);
  });

  it('should evaluate if guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
  
    const result = turn.evaluateGuess();

    expect(result).to.equal(false);
  });

  it('should return correct if guess is correct', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const turn = new Turn('array', card);

    const feedBack = turn.giveFeedback();

    expect(feedBack).to.equal('correct!');
  });

  it('should return incorrect if guess is wrong', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const turn = new Turn('object', card);

    const feedBack = turn.giveFeedback();

    expect(feedBack).to.equal('incorrect!');
  });
});