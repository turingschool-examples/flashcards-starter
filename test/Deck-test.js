const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  let deck;

  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    deck = new Deck();
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  }); 
});