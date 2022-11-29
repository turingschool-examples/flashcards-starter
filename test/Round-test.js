const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn')
const Round = require('../src/Round');
const prototypeData = require('../src/data');

describe('Round', function() {
    let cardsArray;
    let newDeck;
    beforeEach(function() {
        cardsArray = [new Card(prototypeData[0]), new Card(prototypeData[1]), new Card(prototypeData[2])];
        newDeck = new Deck(cardsArray);
        newRound = new Round(newDeck);
    });
    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });
    it('should instantiate a new Round', function() {
        expect(newRound).to.be.an.instanceof(Round);
    }); 
    it('should take in a deck of cards and start with first card in the deck as the current card', function() {

        expect(newRound.deck.cards.length).to.equal(3);
        expect(newRound.currentCard).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        });
    });
    // it('', function() {
    //     expect().to.deep.equal();
    // });
});