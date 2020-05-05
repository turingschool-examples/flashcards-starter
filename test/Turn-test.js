const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], "object");
    const turn = new Turn('array', card);
 });

  it('should return guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], "object");
    const turn = new Turn('array', card);

    assert.equal(turn.userGuess, 'array');
    assert.equal(turn.returnGuess(), 'array');
 });

 it('should return Card', function() {
   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], "object");
   const turn = new Turn('array', card);

   assert.equal(turn.card, card);
   assert.equal(turn.returnCard(), card);
 });

  it('should evaluate guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], "object");
    var turn = new Turn('array', card);

    assert.equal(turn.evaluateGuess(), false);

    var turn = new Turn('object', card);

    assert.equal(turn.evaluateGuess(), true);
  });

  it('should give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], "object");
    var turn = new Turn('array', card);

    assert.equal(turn.giveFeedback(), 'incorrect!');

    var turn = new Turn('object', card);

    assert.equal(turn.giveFeedback(), 'correct!');
  });
});
