const chai = require('chai');
const expect = chai.expect;
var assert = require('chai').assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a user guess and the current card in play', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    assert.deepEqual(turn.card, card);
    assert.equal(turn.guess, 'pug');
  });

  it('should have a returnGuess method that returns its guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    assert.equal(turn.returnGuess(), 'pug');
  });

  it('should have a returnCard method that returns its card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    assert.deepEqual(turn.returnCard(), card);
  });

  it('should have an evaluateGuess method that returns true if a guess is correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    assert.equal(turn.evaluateGuess(), true);
  });

  it('should have an evaluateGuess method that returns false if a guess is incorrect', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('capybara', card);

    assert.equal(turn.evaluateGuess(), false);
  });

  it('should give feedback based on a correct answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    assert.equal(turn.giveFeedback(), 'Correct!');
  });

  it('should give feedback based on an incorrect answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('capybara', card);

    assert.equal(turn.giveFeedback(), 'Incorrect!');
  });
});
