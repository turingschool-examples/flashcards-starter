const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck')
const Card = require ('../src/Card');

describe('Deck', function() {
    let deck;
    let card1;
    let card2;
    let card3;
    let cardArray;
    beforeEach(function() {
        console.log('Initialising Deck Plan...')
        cardArray = [card1, card2, card3];
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2, "What is a comma-separated list of related values?",  ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        deck = new Deck(cardArray);
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should instantiate our good friend Turn', () => {
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should have an array of Card objects', () => {
        console.log(deck.cards);
        expect(deck.cards).to.be.an.instanceof(Array);
        expect(deck.cards).to.have.deep.members([card1, card2, card3]);
        //check single element, check length
    });

    it('should know how many Cards are in the Deck', () => {
        console.log(deck.cards);
        expect(deck.cards).to.have.lengthOf(deck.size);     
    });
})
