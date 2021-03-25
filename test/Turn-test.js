const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn, card;

  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('sea otter', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a turn', function() {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should return user\'s guess', function() {
    expect(turn.returnGuess).to.be.a('function');
    expect(turn.guess).to.equal('sea otter');
  });

  it('should return card', function() {
    expect(turn.returnCard).to.be.a('function');
    expect(turn.card).to.equal(card);
  });

  it('should evaluate user\'s guess', function() {
    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback, either correct or incorrect', function() {
    expect(turn.giveFeedback).to.be.a('function');
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

});
