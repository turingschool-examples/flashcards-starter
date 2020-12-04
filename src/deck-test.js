const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should hold cards', function() {
        const card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        const deck = new Deck([card1])

        expect(deck.cards).to.be.deep.equal([card1]);
    })
})