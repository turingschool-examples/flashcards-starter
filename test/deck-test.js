const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should start with an array of Card objects', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many Cards are in the Deck', function() {
    expect(deck.countCards()).to.equal(3);
  });

});