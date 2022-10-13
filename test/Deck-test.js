const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const expect = chai.expect;

describe('Deck', () => {
    let card1, card2, card3, currentCards, deck;
    beforeEach(() => {
        card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
        card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
        card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
        currentCards = [card1, card2, card3]
        deck = new Deck(currentCards);
    });

    it('should take in an array of cards', () => {
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should correctly count the number of cards in the deck', () => {
        expect(deck.countCards()).to.equal(currentCards.length);
    });
});