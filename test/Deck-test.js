const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let deck;
    let card1;
    let card2;
    let card3;
  beforeEach( () => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iterator method"], "mutator method")
    deck = new Deck([card1, card2, card3])
  });

      it('should be a function', () =>  {
        expect(Deck).to.be.a('function')
      });

      it('should instantiate an instance of Deck', () => {
        expect(deck).to.be.an.instanceof(Deck)
      });

      it('should be initialized with an array of Card objects', () => {
        expect(deck.cards).to.be.a('array')
      });

      it('should know how many cards are in the deck', () => {
        deck.countCards()

        expect(deck.countCards()).to.equal(3)
      });

});
