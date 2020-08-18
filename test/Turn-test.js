const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  it.skip('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a guess', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it.skip('should store a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.card).to.deep.equal(card);
  });

  it.skip('should return the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it.skip('should return the card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it.skip('should check for a wrong answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should check for a right answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('sea otter', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it.skip('should tell the user when their answer is wrong', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it.skip('should tell the user when their answer is right', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('sea otter', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });
