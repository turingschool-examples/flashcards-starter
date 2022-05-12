const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

    let card = new Card (2,'where','here','denver');
    let turn;

    beforeEach(() => {
        turn = new Turn('denver', card);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of a Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should take in an guess', () => {
        expect(turn.guess).to.equal('denver');
    });

    it('should use a Card to play', () => {
        expect(turn.card).to.be.an.instanceOf(Card);
    });

    it('should return guess', () => {
        turn.returnGuess();

        expect(turn.returnGuess()).to.equal(turn.guess);
    });

    it('should return the Card in play', () => {
        turn.returnCard();

        expect(turn.returnCard()).to.equal(turn.card);
    });

    it('should check a users correct guess', () => {
        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should check users incorrect guess', () => {
        turn = new Turn('atlanta', card);
        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should give correct feedback', () => {
        turn.evaluateGuess();
        turn.giveFeedback();

        expect(turn.giveFeedback()).to.equal('Correct!');
    });

    it('should give incorrect feedback', () => {
        turn = new Turn('boston', card);
        turn.evaluateGuess();
        turn.giveFeedback();

        expect(turn.giveFeedback()).to.equal('Incorrect');
    });
});