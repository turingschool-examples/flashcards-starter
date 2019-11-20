const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should receive a guess from the user', function() {
    const turn = new Turn('User guess');
    expect(turn.guess).to.equal('User guess');
  });

  it('should receive the current card in play', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('User guess', card);
    expect(turn.card).to.equal(card);
  });

  it('should return the guess the user made', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('User guess', card);

    turn.returnGuess();

    expect(turn.guess).to.equal('User guess');
  });

  it('should return the card currently in play', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('User guess', card);

    turn.returnCard();

    expect(turn.card).to.equal(card);
  });

  it('should evaluate true if the guess matches the correct answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    turn.returnGuess();
    turn.returnCard();
    turn.evaluateGuess();

    expect(turn.match).to.equal(true);
  });

  it('should evaluate false if the guess does not match the correct answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnGuess();
    turn.returnCard();
    turn.evaluateGuess();

    expect(turn.match).to.equal(false);
  });

  it('should state correct if it is a match', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    turn.returnGuess();
    turn.returnCard();
    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.feedback).to.equal('correct!');
  });

  it('should state incorrect if it is not a match', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnGuess();
    turn.returnCard();
    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.feedback).to.equal('incorrect!');
  });

});
