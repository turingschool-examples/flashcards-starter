const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');

describe('createDeck', function() {
    it('should create a deck of flashcards', function() {
        let card1 = {
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        }; 
        let card2 = {
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        };
        let card3 = {
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        };
        let deck = createDeck(card1, card2, card3);
        expect(deck[2].id).to.equal(3);
    });
});

describe('countCards', function() {
    it('should count the number of cards in a deck', function() {
        let card1 = {
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        }; 
        let card2 = {
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        };
        let card3 = {
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        };
        let deck = createDeck(card1, card2, card3);
        let deckSize = countCards(deck);

        expect(deckSize).to.equal(3);
    });
});
