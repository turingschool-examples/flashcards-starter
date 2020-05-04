const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a users guess and card they are attempting', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    assert.deepEqual(turn.guess, 'pug');
  });

  it('should store the card a user is attempting to answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    assert.deepEqual(turn.card, card);
  });

  it('should return the users guess with returnGuess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    assert.deepEqual(turn.returnGuess(), 'pug');
  });

  it('should return the active card with returnCard', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    assert.deepEqual(turn.returnCard(), card);
  });

  it('should evaluate the users guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const incorrectTurn = new Turn('pug', card);
    const correctTurn = new Turn('sea otter', card);
    assert.deepEqual(incorrectTurn.evaluateGuess(), false);
    assert.deepEqual(correctTurn.evaluateGuess(), true);
  });

  it('should give feedback whether the users guess is correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const correctTurn = new Turn('sea otter', card);
    const incorrectTurn = new Turn('pug', card);
    assert.deepEqual(incorrectTurn.giveFeedback(), 'Incorrect!');
    assert.deepEqual(correctTurn.giveFeedback(), 'Correct!');
  });

});
