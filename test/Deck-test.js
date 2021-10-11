const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function () {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should be able to store cards', function () {
        const card1 = new Card(1, "How many days are in a week?", ["4", "5", "6", "7",], "7");
        const card2 = new Card(2, "How many weeks are in a month?", ["1", "2", "3", "4"], "4");
        const card3 = new Card(3, "How many months are in a year?", ["10", "11", "12"], "12");
        const deck = new Deck([card1, card2, card3]);
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should be able to return the amount of cards', function () {
        const card1 = new Card(1, "How many days are in a week?", ["4", "5", "6", "7",], "7");
        const card2 = new Card(2, "How many weeks are in a month?", ["1", "2", "3", "4"], "4");
        const card3 = new Card(3, "How many months are in a year?", ["10", "11", "12"], "12");
        const deck = new Deck([card1, card2, card3]);
        expect(deck.countCards()).to.equal(3);
    })

})