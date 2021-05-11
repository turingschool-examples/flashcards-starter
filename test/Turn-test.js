
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a guess as a string', function() {
    const turn = new Turn('Blue');
    expect(turn.guess).to.equal('Blue');
  });

  it('should take a card object for the current question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Blue', card);
    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Blue', card);
    const userGuess = turn.returnGuess();
    expect(userGuess).to.equal('Blue');
  });

  it('should be able to return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Blue', card);
    const currentCard = turn.returnCard();
    expect(currentCard).to.deep.equal(card);
  });

  it('should be able to evaluate if the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Blue', card);
    turn.evaluateGuess();
    expect(turn.result).to.equal(false);
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn2 = new Turn('object', card);
    turn2.evaluateGuess();
    expect(turn2.result).to.equal(true);
  });

  it('should be able to give feedback if the guess is correct or incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Blue', card);
    turn.evaluateGuess();
    let feedback = turn.giveFeedback();
    expect(feedback).to.equal('Incorrect!');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn2 = new Turn('object', card);
    turn2.evaluateGuess();
    feedback = turn2.giveFeedback();
    expect(feedback).to.equal('Correct!');
  });
});
