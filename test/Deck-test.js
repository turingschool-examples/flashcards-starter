const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
    let card1, card2, card3, card4, deck;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        card4 = new Card(3,'What is Betul\'s pets\' names?', ['Togo-Lily', 'Daisy-Lucy', 'Sun-Moon'], 'Togo-Lily');

        deck = new Deck([card1, card2, card3, card4]);
    })
    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should be initialized with an array of Card objects', () => {

        expect(deck.cards).to.be.an('array');
        expect(deck.cards).to.deep.equal([card1, card2, card3, card4]);
    })

    it('should know how many Cards are in the Deck', () => {
     
        expect(deck.countCards()).to.equal(4);
    })

});
