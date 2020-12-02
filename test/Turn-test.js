const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  let turn = new Turn('object', card);

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be able to instantate a Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should contain a guess', function() {
    expect(turn.guess).to.deep.equal('object');
  });

  it('should contain a Card instance', function() {
    expect(turn.card).to.equal(card);
  });

  it('should return a guess', function() {
    expect(turn.returnGuess).to.be.a('function');
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card', function() {
    expect(turn.returnCard).to.be.a('function');
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate a guess', function() {
    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback', function() {
    const turn1 = new Turn('object', card);

    expect(turn1.giveFeedback).to.be.a('function');
    expect(turn1.giveFeedback()).to.equal('You got it!');

    const turn2 = new Turn('array', card);

    expect(turn2.giveFeedback).to.be.a('function');
    expect(turn2.giveFeedback()).to.equal('Not even close!');
  });
});