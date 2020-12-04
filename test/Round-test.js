const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

    it('should be a function', function() {
        const card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        const card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        const card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra')
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        const card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        const card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        const card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra')
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round).to.be.an.instanceof(Round);
    });

    it('should have a deck of cards', function() {
        const card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        const card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        const card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra')
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.deck).to.deep.equal(deck.cards);
    })
});