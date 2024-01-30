const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('Create Deck', function() {
    let card1, card2, card3;
    this.beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    });

    it.skip('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it.skip('should return an array of card objects', function() {
        let deck = createDeck([card1, card2, card3]);

        expect(deck).to.deep.equal([card1, card2, card3]);
        expect(deck[0].id).to.equal(1);
    });
});

describe('Count Cards', function() {
    let card1, card2, card3;
    this.beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    });

    it.skip('should be a function', function() {

    });

    it.skip('should return the length of the deck array', function() {

    });
});