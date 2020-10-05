const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should be instantiated with 2 arguments - a user guess (string) and a \'Card\' object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should return the user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object');
  });

  it.skip('should return the card object', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.deep.equal({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it.skip('should return true if the answer is correct, false if incorrect', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    expect(turn1.evaluateGuess()).to.equal('false');
    expect(turn2.evaluateGuess()).to.equal('true');
  });

  it.skip('should return either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    expect(turn1.evaluateGuess()).to.equal('false');
    expect(turn1.giveFeedback()).to.equal('incorrect');
    expect(turn2.evaluateGuess()).to.equal('true');
    expect(turn2.giveFeedback()).to.equal('correct');
  });
});
