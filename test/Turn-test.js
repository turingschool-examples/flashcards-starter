const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Turn', function() {
    let card, turn1, turn2

    beforeEach(function() {
        card = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn1 = new Turn('object', card);
        turn2 = new Turn('array', card);
    });
    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });
    it('should be able to take in the current card at play', function() {
        expect(turn1.currentCard).to.equal(card);
    });
    it('should be able to take in a user guess', function() {
        expect(turn1.userGuess).to.equal('object');
    });
    it('should be able to return current card', function() {
        expect(turn1.returnCard()).to.equal(card);
    });
    it('should be able to return the user guess', function() {
        expect(turn1.returnGuess()).to.equal('object');
    });
    it('should be able to evaluate guess', function() {
        expect(turn1.evaluateGuess()).to.equal(true);
        expect(turn2.evaluateGuess()).to.equal(false);
    });
    it('should give feedback', function() {
        expect(turn1.giveFeedback()).to.equal(`correct!`);
        expect(turn2.giveFeedback()).to.equal(`incorrect!`);
    });
});
