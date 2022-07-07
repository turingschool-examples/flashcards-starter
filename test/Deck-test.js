const chai = require('chai');
const expect = chai.expect;

const cardData = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let cards;
    let deck;

    beforeEach(() => {
        cards = 
            [
                new Card(cardData.prototypeData[1]), 
                new Card(cardData.prototypeData[10]), 
                new Card(cardData.prototypeData[28])
            ]
        
        deck = new Deck(cards);

    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');

    });

    it('should be an isnstance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);

    });

    it('should have an deck of cards', () => {
        expect(deck.cards).to.deep.equal(cards);

    });

    it('should know how many cards are in the deck', () => {
        const cardAmount = deck.countCards();
        expect(cardAmount).to.equal(3);

    });

});



