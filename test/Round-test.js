const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');



describe('Round', function() {
  it('should be a function', function() {
  const round = new Round();
  expect(Round).to.be.a('function');
});

it('should return the current card being played', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  expect(round.returnCurrentCard()).to.equal(card1)
})

})
