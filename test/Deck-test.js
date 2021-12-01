const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const cards = require('../src/data');


describe("Deck", function () {

    it("should be a function", function () {
        const deck = new Deck();
        expect(Deck).to.be.a("function");
    });

    it("should be an instance of Deck", function () {
        const deck = new Deck();
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it("should have a method to keep track of the cards in the deck", function () {
        const deck = new Deck([{
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
        }, {
            "id": 6,
            "question": "What is an example of a mutator method?",
            "answers": ["sort()", "map()", "join()"],
            "correctAnswer": "sort()"
        }]);
        expect(deck.countCards()).to.equal(6);
    });
});