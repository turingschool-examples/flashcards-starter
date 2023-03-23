const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    var deck, card1, card7, card14
    beforeEach(() => {
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card7 = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()");
        card14 = new Card(14, "Which iteration method can turn an array into a single value of any data type?", ["reduce()", "map()", "filter()"], "reduce()");
    
        deck = new Deck();
    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });
  
    it('should instantiate a new deck', () => {
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should take in an array of Card objects', () => {
        deck = new Deck([card1, card7, card14]);

        expect(deck.cards).to.be.an('array');
    });

    it('should know how many cards are in the deck', () => {
        deck = new Deck([card1, card7, card14]);

        expect(deck.countCards()).to.equal(3);
    });
})