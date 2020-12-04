const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    let round, deck, card1, card2, card3, turn;
    beforeEach(() => {
        turn = new Turn('blue', card1)
        card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should have a deck of cards', function() {
        expect(round.deck).to.deep.equal([card1, card2, card3]);
    })

    it('should return the current card', function() {
        expect(round.returnCurrentCard()).to.equal(card1);
    })

    it('should create a new instance of the Turn class', function() {
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should start with no turns', function() {
        expect(round.turns).to.equal(0);
    })

    it('should update turns count', function() {
        round.takeTurn()
        round.takeTurn()

        expect(round.turns).to.equal(2);
    })

    it('should return feedback', function() {
        round.takeTurn('orange')

        expect(round.takeTurn('orange')).to.equal('incorrect!')
    })

    it('start with no incorrect guesses', function() {
        expect(round.incorrectGuesses.length).to.equal(0);
    })

    it('should track incorrect guesses', function() {
        round.takeTurn('orange')

        expect(round.incorrectGuesses.length).to.equal(1);
    })
    it('should update the current card', function() {
        round.takeTurn('orange')

        expect(round.returnCurrentCard()).to.equal(card2)
    })

    it('should calculate percentage of correct answers', function() {
        round.takeTurn('blue')
        round.takeTurn('December')

        expect(round.calculatePercentCorrect()).to.equal(50);

    })

    it('should alert when a round is over', function() {
        round.takeTurn('blue');
        round.takeTurn('October');
        round.takeTurn('zebra');

        expect(round.endRound()).to.equal('**Round over!** You answered 100% of the questions correctly!');
    })
})