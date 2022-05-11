const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function(){
    it('should be a function', function(){
        const newDeck = new Deck();
        expect(Deck).to.be.a('function');
    });
  
    it('should be an instance of Deck', function(){
        const newDeck = new Deck();
        expect(newDeck).to.be.an.instanceof(Deck);
    });

    it('should have cards', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const newDeck = new Deck(card1);
        expect(newDeck.deck).to.equal(card1);
    });

    it('should count how many cards are in the deck', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const newDeck = new Deck([card1, card2, card3]);

        expect(newDeck.countCards()).to.equal(3);
    });
});