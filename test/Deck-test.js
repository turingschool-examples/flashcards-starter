const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const expect = chai.expect;

describe('Deck', function() {
    it('should take in an array of cards', function() {
        const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
        const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
        const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
        const deck = new Deck([card1, card2, card3]);
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should correctly count the number of cards in the deck', function() {
        const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
        const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
        const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
        const currentCards = [card1, card2, card3]
        const deck = new Deck(currentCards);
        expect(deck.countCards()).to.equal(currentCards.length);
    });
});