const chai = require('chai');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const expect = chai.expect;

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be able to instantate a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  })

  it.skip('should contain a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.guess).to.equal('object');
  });

  it.skip('should contain a Card instance', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.equal(card);
  });

  it.skip('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess).to.be.a('function');
    expect(turn.returnGuess).to.equal('object');
  });

  it.skip('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard).to.be.a('function');
    expect(turn.returnCard).to.equal(card);
  });

  it.skip('should be able to evaluate a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess).to.equal(true);
  });

  it.skip('should be able to give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    expect(turn1.giveFeedback).to.be.a('function');
    expect(turn1.giveFeedback).to.equal('You got it!');

    const turn2 = new Turn('array', card);
    expect(turn2.giveFeedback).to.be.a('function');
    expect(turn2.giveFeedback).to.equal('Not even close!');
  });
});