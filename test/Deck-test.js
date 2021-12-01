const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

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
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = new Deck([card1, card2, card3]);
        expect(deck.countCards()).to.equal(3);
    });
});