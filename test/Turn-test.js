const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with 2 arguments - a user guess (string) and a \'Card\' object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should indicate bad argument formatting', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const turn2 = new Turn(true, 1);

    expect(turn.invalidInput).to.equal(false);
    expect(turn2.invalidInput).to.equal(true);
  });


  it('should return the user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card object', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.deep.equal({ id: 1, question: 'What is Robbie\'s favorite animal', invalidCard: false, answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it('should return true if the answer is correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if incorrect', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return Correct!’ if the guess is correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should return ‘Incorrect...’ if the guess is not correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);
    const turn3 = new Turn();
    const turn4 = new Turn(card);

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
    expect(turn3.evaluateGuess()).to.equal(false);
    expect(turn4.evaluateGuess()).to.equal(false);


    expect(turn1.giveFeedback()).to.equal('Incorrect...');
    expect(turn2.giveFeedback()).to.equal('Correct!');
    expect(turn3.giveFeedback()).to.equal('Incorrect...');
    expect(turn4.giveFeedback()).to.equal('Incorrect...');
  });
});
