const chai = require('chai');
const Card = require('../src/Card.js');
const expect = chai.expect;
const data = require('../src/data.js');
const Deck = require('../src/Deck');

describe('Deck', function () {
    
    it('Should be a function', function () {
        const deck = new Deck()
        expect(Deck).to.be.a('function')
    });

    it('Should initialize with an array of cards', function () {

        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

        const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')

        const newDeck = [card1, card2]

        const deck = new Deck(newDeck)
        

        expect(deck.cards).to.equal(newDeck)
    });

    it('Should be able to determine the amount of cards in the deck', function() {
        
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

        const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')

        const newDeck = [card1, card2]

        const deck = new Deck(newDeck)

        expect(deck.countCards()).to.equal(2)
    })
});