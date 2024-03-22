const chai = require('chai');
const expect = chai.expect;
const {createDeck, countCards} = require('../src/deck');
const { it, describe } = require('mocha');
const { createCard } = require('../src/card');

describe('deck', function(){
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
     });
    it('should create a deck', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

        const deck = createDeck([card1, card2, card3]);

        expect(deck[0]).to.equal(card1);
        expect(deck[1]).to.equal(card2);
        expect(deck[2]).to.equal(card3);
    });
    it('should create another deck', function() {
        const card1 = createCard(30, "What type of methods are functions that allow you to manipulate the value of a particular data type or class?", ["prototype method", "object", "callback function"], "prototype method")
        const card2 = createCard( 24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true")
        const card3 = createCard(13, "The callback function for map() returns a modified version of the current element.", ["true", "false"], "true")

        const deck = createDeck([card1,card2,card3])

        expect(deck[0]).to.equal(card1);
        expect(deck[1]).to.equal(card2);
        expect(deck[2]).to.equal(card3);
    });
     it('should count cards', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard( 24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true")
        const card4 = createCard(13, "The callback function for map() returns a modified version of the current element.", ["true", "false"], "true")

        const deck = createDeck([card1,card2, card3, card4])

        const deckCount = countCards(deck)

        expect(deckCount).to.equal(4)
     });
});


