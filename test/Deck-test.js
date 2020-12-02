const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1, card2, card3;
  let deck;

  beforeEach(function() {
    card1 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?", ["filter()", "find()", "map()"], "filter()");
    card2 = new Card(17, "What does the reduce() method take in?", ["callback function and initializer", "callback function and current element", "callback function and accumulator"], "callback function and initializer");
    card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
    deck = new Deck([card1, card2, card3]);
  })
  
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });
  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  })
  it('should include an array of Card objects', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  })
  it('should know how many cards are in the Deck', function() {
    expect(deck.countCards()).to.equal(3);
  })
});
