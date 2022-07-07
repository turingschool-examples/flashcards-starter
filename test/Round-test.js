const chai = require('chai');
const expect = chai.expect;

const cardData = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', () => {
    let cards;
    let deck;
    let round;

    beforeEach(() => {
        cards = 
            [
                new Card(cardData.prototypeData[1]), 
                new Card(cardData.prototypeData[10]), 
                new Card(cardData.prototypeData[28])
            ]
        
        deck = new Deck(cards);
        round = new Round();
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an istance of Round', () => {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should return current card', () => {
        const currentCard = round.returnCurrentCard();
        expect(currentCard).to.equal(deck.cards[0]);
    }); 

    it()

});