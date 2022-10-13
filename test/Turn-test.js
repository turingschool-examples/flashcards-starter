const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn1, turn2, card1;

  beforeEach(()=> {
    turn = new Turn()
    turn1 = new Turn('pug', card1);
    turn2 = new Turn('sea otter', card1);
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

  it('should be function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should takes two arguments, user guess and Card in play', function() {
    expect(turn1.guess).to.equal('pug');
    expect(turn1.card).to.deep.equal(card1);
  });

  it('should have a method that returns the guess', function() {
    expect(turn1.returnGuess()).to.equal('pug');
  });

  it('should have a method that returns the card', function() {
    expect(turn1.returnCard()).to.deep.equal(card1);
  });

  it('should have a method that evaluates the guess', function() {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that gives feedback', function() {
    expect(turn1.giveFeedback()).to.equal("Incorrect!");
    expect(turn2.giveFeedback()).to.equal("Correct!");
  });
});
