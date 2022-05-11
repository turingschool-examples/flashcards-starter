const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let card1;
    let card2;
    let deck;
    
    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What uses indices to keep track of ordered information?', ['object', 'array', 'function'], 'array');
        deck = new Deck([card1, card2])
    })
    
    it('should hold an array of Cards', () => {
        expect(deck.cards).to.be.a('array');
        expect(deck.cards[0]).to.be.an.instanceOf(Card);
    })
    
    it('should be able to count the number of card decks', () => {
        expect(deck.countCards()).to.equal(2);
    })
})
