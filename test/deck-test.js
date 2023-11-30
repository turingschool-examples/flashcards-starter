const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { countCards, createDeck } = require('../src/deck');

describe('createDeck', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it('should create a deck of cards', function() {
        const card1 = createCard(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        const card2 = createCard(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
        const card3 = createCard(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()");
        const deck = [card1, card2, card3]
        
        expect(createDeck(deck)).to.be.an('object');
        expect(createDeck(deck)).to.have.property('cards').with.lengthOf(3);
        expect(createDeck(deck).cards[0]).to.deep.equal(card1);
        expect(createDeck(deck).cards[1]).to.deep.equal(card2);
        expect(createDeck(deck).cards[2]).to.deep.equal(card3);
    });
});