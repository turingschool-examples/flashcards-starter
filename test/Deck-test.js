const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let card1, card2, card3;
    let deck;

    beforeEach(() => {
        card1 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"],
        "accessor method");
        card3 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
        ["mutator method", "accessor method", "iteration method"],
        "iteration method");
        deck = new Deck([card1, card2, card3]);
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should hold an array of card objects', () => {
        expect(deck.cards).to.be.an('array');
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    })

    it('should know how many cards are in the deck', function() {
        deck.countCards();

        expect(deck.countCards()).to.equal(3);
    })


})