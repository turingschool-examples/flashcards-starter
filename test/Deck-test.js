const { expect } = require("chai")

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {
    it('should be a function', () => {
        expect(Deck).to.a('function')
    });

    it('should know how many Cards are in the Deck', () => {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
       
        let decks = new Deck([card1, card2, card3])
        let result = decks.countCards();

        expect(result).to.equal(3)
    });
})