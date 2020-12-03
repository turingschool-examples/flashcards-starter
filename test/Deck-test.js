const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
    it('should be an instance of a Deck', function() {

        const deck = new Deck();

        expect(deck).to.be.instanceof(Deck);
    })
    it('know how many cards are in the deck', function() {

        const card1 = new Card(2, "Why is the sky blue?", ['science stuff', 'magic', 'Zeus'], 'science stuff');
        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card3 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], 'true');


        const deck = new Deck([card1, card2, card3]);

        expect(deck.countCards()).to.equal(3);
    })
})