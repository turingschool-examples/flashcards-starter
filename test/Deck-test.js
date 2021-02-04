const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const {sampleDeck} = require('../src/test-data');
const expect = chai.expect;

describe('Deck', function() {
    const sampleCards = sampleDeck.map(card => {
        return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })

    it(`Should be a function`, function() {
        const deck = new Deck();
        expect(Deck).to.be.a(`function`);
    });

    it(`should be an instance of deck`, function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it(`should store an array of cards`, function() {
        const deck = new Deck(sampleCards)
        expect(deck.cards).to.equal(sampleCards)
    })

    it(`should count how many cards there are in a deck`, function() {
        const deck = new Deck(sampleCards)
        deck.countCards();
        expect(deck.countCards()).to.equal(5)
    })
})