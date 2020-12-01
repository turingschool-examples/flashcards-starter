const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
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

  it('should return a guess', function() {
    const turn = new Turn('object');
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('class', card);
    expect(turn.returnCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
  });

  it('should evaluate a user\'s guess correctly', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('class', card);
    expect(turn.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('object', card);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return correct feedback based on evaluation', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('class', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');

    const turn2 = new Turn('object', card);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
