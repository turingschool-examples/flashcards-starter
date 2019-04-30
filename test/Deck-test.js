const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to count how many cards it holds', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const turn = new Turn("object", card1)
    const deck = new Deck([card1, card2])
    expect(deck.countCards()).to.equal(2);
  });

});
