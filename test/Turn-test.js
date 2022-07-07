const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Turn', function() {
    let card;
    let turn;

    this.beforeEach(function() {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('object', card);
    });

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should return a user\'s guess', function() {
        expect(turn.returnGuess()).to.equal('object');
    });

    it('should return the card', function() {
        expect(turn.returnCard()).to.be.an.instanceOf(Card)
    });

    it('should be able to evaluate the user\'s guess', function() {
        expect(turn.evaluateGuess()).to.equal(true)
    });

    it('should be able to return feedback', function() {
        expect(turn.giveFeedback()).to.equal('Correct!')
    });
});