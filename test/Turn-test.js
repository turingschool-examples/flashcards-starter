const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    let expected = 'object';
    let actual = turn.returnGuess();

    expect(actual).to.equal(expected);
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    let expected = card;
    let actual = turn.returnCard();

    expect(actual).to.equal(expected);
  });

  it('should evalulate the user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);


    let expected1 = turn1.evaluateGuess();
    let actual1 = true;

    let expected2 = turn2.evaluateGuess();
    let actual2 = false;
    
    expect(expected1).to.equal(actual1);
    expect(expected2).to.equal(actual2);
  });

  it('should give feedback on user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);


    let expected1 = turn1.giveFeedback();
    let actual1 = 'correct!';

    let expected2 = turn2.giveFeedback();
    let actual2 = 'incorrect!';

    expect(expected1).to.equal(actual1);
    expect(expected2).to.equal(actual2);
  });

});
