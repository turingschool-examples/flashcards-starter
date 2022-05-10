const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

    let turn;

    beforeEach(() => {
        turn = new Turn('', Card)
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of a Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should take in an guess', () => {
        expect(turn.guess).to.equal('')
    });

    it('should use a Card to play', () => {
        expect(turn.card).to.equal(Card)
    });

    it('should return guess', () => {
        turn.returnGuess();

        expect(turn.returnGuess()).to.equal(turn.guess)
    });

    it('should return the Card in play', () => {
        turn.returnCard();

        expect(turn.returnCard()).to.equal(turn.card)
    });

    it('should check a users guess', () => {
        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(turn.evaluate)
    });

    it('should give correct feedback', () => {
        turn.giveFeedback();

        expect(turn.giveFeedback()).to.equal(turn.feedback)
    });

})