const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card
  let turn
  let turn2

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
    turn2 = new Turn('sea otter', card);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should pass through the user\'s guess to the question and a Card object for the current card in play', function() {
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

  it('should have a method that returns the guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should have a method that returns the card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method that evaluates if the user\'s guess is true', function() {
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that lets the user know whether the guess is correct or not', function() {
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });

});
