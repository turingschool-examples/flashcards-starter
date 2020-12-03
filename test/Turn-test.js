const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    let card, turn;
    beforeEach(() => {
        turn = new Turn('object', card);
        card = new Card();
    })

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should have a guess', function() {
        expect(turn.guess).to.be.a('string');
    })

    it('should have a card', function() {
        expect(turn.card).to.be.an.instanceof(Card);
    })

    it('should return a guess', function() {
        expect(turn.returnGuess()).to.equal(turn.guess);
    })

    it('should return the card', function() {
        expect(turn.returnCard()).to.equal(turn.card);
    })

    it('should evaluate a guess', function() {
        expect(turn.evaluateGuess()).to.equal('boolean')
    })
});