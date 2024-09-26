const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards} = require('../src/deck');
const { createCard } = require('../src/card');

describe('deck', function() {
    let card1, card2, card3, deck;
    beforeEach(function() {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = createDeck([card1, card2, card3]); 
    })

    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it('should create a deck with its properties', function() {
        expect(deck).to.deep.equal([card1, card2, card3]);
    })

    it('should be able to count cards', function() {
        const numCards = countCards(deck);

        expect(numCards).to.equal(3);


    })
});