const chai = require('chai')
const expect = chai.expect 
const { countCards, createDeck } = require('../src/deck.js')
const { createCard } = require('../src/card.js')

describe("deck functions", () => {
    it("should create a deck with the created cards.", () => {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const deck = createDeck([card1, card2, card3]);

        expect(deck[0]).to.equal(card1)
        expect(deck[1]).to.equal(card2)
        expect(deck[2]).to.equal(card3)
        
    })

    it("should count how many cards are in the deck.", () => {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const deck = createDeck([card1, card2, card3]);
        const cardCount = countCards(deck)

        expect(cardCount).to.equal(3)

        
    })
})