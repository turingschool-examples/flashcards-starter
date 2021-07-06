const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let deck;
  beforeEach(() =>  {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',['object', 'array', 'function'],'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?',['array', 'object', 'function'],'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'],'mutator method');
    deck = new Deck([card1, card2, card3]);
  })

  it.skip('should be a function', function() {

    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Card', function() {

    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should store a list of possible answers', function() {

    expect(deck.allCards).to.deep.equal([card1, card2, card3]);
  });

  it.skip('should store the correct answer', function() {

    expect(deck.countCards()).to.equal(3);
  });
});
