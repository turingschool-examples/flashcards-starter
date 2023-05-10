const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('createDeck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create a deck with cards', function() {
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = createDeck([card1, card2, card3])
  expect(deck).to.deep.equal([card1, card2, card3])
  });
});

describe('countCards', function() {
  it('should be a function', function() {
    expect(countCards).to.be.a('function');
  });


})