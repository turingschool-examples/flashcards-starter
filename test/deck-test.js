const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('deck', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it('should be created with an array of card objects', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
        const card3 = createCard(3, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')

        const deck = createDeck([card1, card2, card3]);
        expect(deck[0]).to.equal(card1)
    })
});

describe('count cards in deck', function() {
    it('should count the number of cards in a deck', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
        const card3 = createCard(3, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')

        const deck = createDeck([card1, card2, card3]);
        const totalCards = countCards(deck);
        expect(totalCards).to.equal(3)
    })
})