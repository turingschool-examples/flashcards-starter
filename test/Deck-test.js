const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', function() {

    it('Should be a function', function() {
        let deck = new Deck();

        expect(Deck).to.be.a('function')
    });

    it('Should be an instance of the Deck class', function() {
        let deck = new Deck();

        expect(deck).to.be.an.instanceOf(Deck)
    });

    it('Should have an array of cards by default', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let cards = [card1, card2, card3];

        let deck = new Deck(cards);

        expect(deck.cards).to.equal(cards)
    });

    it('Should keep track of how many cards are in the deck', function() {
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne');
        let card2 = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker');
        let card3 = new Card(3, 'What is the name of Batman\'s Butler?', ['Sir Pennywise', 'Ralph', 'Alfred'], 'Alfred');

        let cards = [card1, card2, card3];

        let deck = new Deck(cards);

        let count = deck.countCards()

        expect(count).to.equal(3);

        let card4 = new Card(4, 'Who is Batman\'s sidekick?', ['Toto', 'John Steed', 'Robin'], 'Robin');
        deck.cards.push(card4);
        count = deck.countCards();

        expect(count).to.equal(4)
    })
})