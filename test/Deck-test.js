const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const data = require('../src/data');
const expect = chai.expect;

describe("Deck", () => {
    let cards, card1, card2, card3;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        cards = [card1, card2, card3];
    });
    
    it('Should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('Should be an instance of Deck', () => {
        let deck1 = new Deck(cards);
        
        expect(deck1).to.be.an.instanceOf(Deck);
    });

    it('Should be able to count how many cards are in the deck', () => {
        const deck1 = new Deck(cards);
        
        const count = deck1.countCards();
        
        expect(count).to.equal(3);
    });
    
    it('Should be able to count cards in another deck', () => {
        const deck1 = new Deck(data.prototypeData);
        
        const count = deck1.countCards();
        
        expect(count).to.equal(30);
    });
});
