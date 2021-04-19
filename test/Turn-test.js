const chai = require('chai');
const { it } = require('mocha');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const card = new Card(
  1,
  'What allows you to define a set of related information using key-value pairs?',
  ['object', 'array', 'function'],
  'object'
);

describe('Card', function () {

  it('has a guess', function() {
    let turn = new Turn('object', card)
    expect(turn.returnGuess()).to.equal('object')
  });

  it('has a card', function() {
    let turn = new Turn('object', card)
    expect(turn.returnCard()).to.deep.equal(card)
  });

  it('returns true if guess is correct', function() {
    let turn = new Turn('object', card)
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('returns false if guess is wrong', function() {
    let turn = new Turn('banana', card)
    expect(turn.evaluateGuess()).to.equal(false)
  });

  it('returns correct if guess is correct', function() {
    let turn = new Turn('object', card)
    expect(turn.giveFeedback()).to.equal('correct!')
  });

  it('returns incorrect if guess is wrong', function() {
    let turn = new Turn('banana', card)
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });
});