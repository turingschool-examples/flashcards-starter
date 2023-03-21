const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const prototypeData = require('../src/data.js');

// deck class should be initializwed with an array of card objects and should have an sccompanying test file. It shouuld know how nany cadrs are in the deck
describe('Deck', function(){

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.instanceof(Deck);
  });

  it('should be initialized with an array', function() {
    const cards = []
    cards.push(new Card(1, "What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object"));
    cards.push(new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array"));
    cards.push(new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"));
    cards.push(new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method"));
    cards.push(new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method"));
    cards.push(new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()"));

    let deck = new Deck(cards);

    expect(deck.cards).to.deep.equal(cards);
  });

  it('should know how many cards it has', function() {
    const cards = []
    cards.push(new Card(1, "What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object"));
    cards.push(new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array"));
    cards.push(new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"));
    cards.push(new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method"));
    cards.push(new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method"));
    cards.push(new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()"));

    let deck = new Deck(cards);

    deck.findNumberOfCards();

    expect(deck.numberOfCards).to.equal(6);
  });
});

