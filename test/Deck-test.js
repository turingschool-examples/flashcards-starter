const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
// const data = require('../src/data');
// const allCards = data.prototypeData;

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should count number of cards in deck', function() {
    const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const card2 = new Card({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
    const card3 = new Card({id: 3, question: 'What type of prototype method directly modifies the existing array?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'mutator method'});
    const deck = new Deck([card1, card2, card3]);

    // const deck = new Deck(allCards);
    expect(deck.countCards()).to.equal(3);
  });
});