const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const prototypeData = require('../src/data.js');
const Card = require('../src/Card');

describe('Deck', function () {
    let testcounter = 0;
    beforeEach(function () {
        testcounter ++;
        console.log(`Test #${testcounter}`);
    });

    it('should be a function', function() {
        const deck = new Deck;
        expect(Deck).to.be.a('function');
    })

    it('should be a new instance of Deck', function() {
        const deck = new Deck;
        expect(deck).to.be.an.instanceOf(Deck); 
    })

    it('should be able to hold an array of cards', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);

        const deck = new Deck([card1, card2, card3]);

        expect(deck.cardDeck).to.deep.equal([card1, card2, card3]);
    });

    it('should be able to count number of cards in the deck', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);

        const deck = new Deck([card1, card2, card3]);
        const numOfCardsInDeck = deck.countCards();

        expect(numOfCardsInDeck).to.equal(3);
    });
})