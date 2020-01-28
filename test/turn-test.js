const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turn');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be able to guess an answer', function() {
    const card = new Card(2, 'Which is of these is a reserved word in Javascript?', ['this', 'never', 'mocha'], 'this');
    const turn = new Turn('never', card);
    expect(turn.guess).to.equal('never');
  })

  it('should be able to return a guess', function() {
    const card = new Card(4, 'A locally scoped variable is accessible to all function within the file.', ['true', 'false'], 'false');
    const turn = new Turn('true', card);
    expect(turn.returnGuess()).to.equal('true');
  });

  it('should be able to return a card', function() {
    const card = new Card(2, 'What is NOT true of the return keyword?', ['it end the function after it is run', 'it can hold onto a value from the function', 'it always comes back as undefined'], 'it always comes back as undefined');
    const turn = new Turn('it always comes back as undefined', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('shoud be able to return a boolean indicating if the user\'s guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('array', card);
    const turn2 = new Turn('function', card);
    const turn3 = new Turn('object', card);
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(true);

  });

  it('should be give feedback on whether user\'s answer is correct or incorrect', function() {
    const card = new Card(1, 'What is a function defined on an object called?', ['parameter', 'method', 'property'], 'method');
    const turn1 = new Turn('method', card);
    const turn2 = new Turn('parameter', card);
    expect(turn1.giveFeedback()).to.equal('correct');
    expect(turn2.giveFeedback()).to.equal('incorrect');
  });
});
