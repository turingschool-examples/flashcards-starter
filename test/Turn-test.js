const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('returnGuess should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.returnGuess()).to.equal('function');
  });

  it('returnCard should return the current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.returnCard()).to.equal(turn.currentCard);
  });

  it('evaluateGuess should prove if user\'s guess was correct', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card1);
    const card2 = new Card(2, 'What data type lets you store symbols in quotation marks?', ['object', 'array', 'string'], 'string');
    const turn2 = new Turn('number', card2);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('giveFeedback should return the correct feedback to the user\'s guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card1);
    const card2 = new Card(2, 'What data type lets you store symbols in quotation marks?', ['object', 'array', 'string'], 'string');
    const turn2 = new Turn('number', card2);

    expect(turn1.giveFeedback()).to.equal('Correct!');
    expect(turn2.giveFeedback()).to.equal('Incorrect!');

  });

});
