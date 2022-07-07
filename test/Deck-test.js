const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let deck;
    let card1;
    let card2;
    let card3;
    beforeEach (() => {
         deck = new Deck([card1, card2, card3]);
         card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
         card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
         card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    });

   it('should be a function', function() {
       expect(Deck).to.be.a('function');
   });

    it('should be an instance of Deck', function () {
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should have an array of Card objects', function () {
        expect(deck.deck).to.deep.equal([card1, card2, card3])
    });

    it('should know how many card are in the deck', function () {
        let countcards = deck.countCards();
        expect(countcards).to.equal(3)
    });
});
    
