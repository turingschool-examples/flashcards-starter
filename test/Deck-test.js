const chai = require('chai');
const assert = chai.assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
    let card;
    let deck;

    beforeEach(function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = new Deck([card1, card2, card3])
    })

    it('should contain an array of cards', function() {
        assert.equal(deck.cards.length, 3)
    })

    it('should have a method that returns the number of cards in the deck', function() {
        assert.equal(deck.cards.length, 3)
    })

})