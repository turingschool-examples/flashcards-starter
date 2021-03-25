const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn, card;

  beforeEach( function() {
    turn = new Turn('sea otter', card);
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

  it.skip('should be a function', function() {
    expect(turn).to.be.a('function');
  });

  it.skip('should instantiate a turn', function() {
    expect(turn).to.be.an / instanceOf(Turn);
  });

  it.skip('should return user\'s guess', function() {
    expect(turn.returnGuess()).to.be.a('function');
    expect(turn.guess).to.equal('sea otter');
  });

  it.skip('should return card', function() {
    expect(turn.returnCard()).to.be.a('function');
    expect(turn.card).to.equal(card);
  });

  it.skip('should evaluate user\'s guess', function() {
    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess).to.equal(true);
  });

  it.skip('should give feedback, either correct or incorrect', function() {
    expect(turn.giveFeedback).to.be.a('function');
    expect(turn.giveFeedback).to.equal('Correct!');
  });
  
});
