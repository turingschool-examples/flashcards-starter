const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');

describe('Deck', function() {
    let card1, card2, card3, deck;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = new Deck([card1, card2, card3]);
    })

    it('should be an instance of Deck', () => {

        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should pass through an array of cards', () => {
        
        expect(deck.cards).to.deep.equal([card1, card2, card3])
    })

    it('should be able to count the cards in the deck', () => {

        let cardAmount = deck.countCards();

        expect(cardAmount).to.equal(3);
    })
})