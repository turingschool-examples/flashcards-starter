const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    let round;
    let deck;
    let card1;
    let card2;
    let card3;
    let turn;
    beforeEach(() => {
        turn = new Turn('blue', card1)
        card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra');
        card4 = new Card(4, 'What color is a stop sign' ['blue', 'red', 'purple'], 'red')
        deck = new Deck([card1, card2, card3, card4]);
        round = new Round(deck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should have a deck of cards', function() {
        expect(round.deck).to.deep.equal([card1, card2, card3, card4]);
    })

    it('should return the current card', function() {
        expect(round.currentCard()).to.equal(card1);
    })
    it('should update turns count', function() {
        round.takeTurn()
        round.takeTurn()

        expect(round.turns).to.equal(2);
    })

    it('should track incorrect guesses', function() {
        round.takeTurn('orange')

        expect(round.incorrectGuesses.length).to.equal(1);
    })
})