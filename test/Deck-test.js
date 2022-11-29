const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const prototypeData = require('../src/data');

describe('Deck', function() {
    let cardsArray;
    let newDeck;
    beforeEach(function() {

        cardsArray = [new Card(prototypeData[0]), new Card(prototypeData[1]), new Card(prototypeData[2])];
        newDeck = new Deck(cardsArray);
    });
    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });
    it('should instantiate a new Deck', function() {
        expect(newDeck).to.be.an.instanceof(Deck);
    }); 
    it('should contain an array of different card objects', function() {
        expect(newDeck.cards).to.deep.equal([{
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
            }, {
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
            }, {
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
            }]);
        });
        it('should count the cards in the deck', function() {
            expect(newDeck.countCards()).to.equal(3);
        });
});