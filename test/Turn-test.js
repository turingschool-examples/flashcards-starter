const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be function', function() {
    const turn = new Turn ();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn that takes two arguments', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should takes two arguments, user guess and Card in play', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card1);
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.deep.equal(card1);
  });

  it('should have a method that returns the guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card1);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should have a method that returns the card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card1);
    expect(turn.returnCard()).to.deep.equal(card1);
  });

  it('should have a method that evaluates the guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn1 = new Turn('pug', card1);
    const turn2 = new Turn('sea otter', card1);
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that gives feedback', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn1 = new Turn('pug', card1);
    const turn2 = new Turn('sea otter', card1);
    expect(turn1.giveFeedback()).to.equal("Incorrect!");
    expect(turn2.giveFeedback()).to.equal("Correct!");
  });
});
