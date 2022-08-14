const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {
    let turn;
    let card1;

    beforeEach(() => {

    turn = new Turn('object', card1)
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object') 
    });

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store a user guess', function() {
        expect(turn.userGuess).to.equal('object')
    });

    it('should store the current card', function() {
        expect(turn.currentCard).to.deep.equal(card1)
    });

    it('should return the user guess', function() {
        expect(turn.returnGuess()).to.equal('object')
    });

    it('should return the current card', function() {
        expect(turn.returnCard()).to.deep.equal(card1)
    });

    it('should evaluate a guess', function() {
        expect(turn.evaluateGuess()).to.equal(true)
    });

    it('should return feedback based on the guess', function() {
        expect(turn.giveFeedback()).to.equal('Correct!')
    });
});



