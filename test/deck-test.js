const chai = require('chai');
const expect = chai.expect;
const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('creates deck', function(){
    it('should be a function', function(){
        expect(countCards).to.be.a('function')
    });
    it('should create a deck of cards', function(){
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

        const deck = createDeck([card1, card2, card3]);

        expect(deck).to.deep.equal([{
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
          }])
        
    });
    it('should create a deck with any number of cards', function(){
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const card4 = createCard(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
        const card5 = createCard(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")

        const deck = createDeck([card1, card2, card3, card4, card5])

        expect(deck).to.deep.equal([{
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
          }, {
            "id": 4,
            "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "accessor method"
          }, {
            "id": 5,
            "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "iteration method"
          }])
    });
});

describe('counts cards in deck', function(){
    it('should be a function', function(){
        expect(countCards).to.be.a('function')
    });
    it('should know how many cards are in a given deck', function(){
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const card4 = createCard(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")

        const deck = createDeck([card1, card2, card3, card4])
        const numOfCards = countCards(deck)

        expect(numOfCards).to.equal(4)
    });
    it('should know how many cards are in a given deck of a different size', function(){
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const card4 = createCard(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
        const card5 = createCard(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")

        const deck = createDeck([card1, card2, card3, card4, card5])
        const numOfCards = countCards(deck)

        expect(numOfCards).to.equal(5)
    });
});