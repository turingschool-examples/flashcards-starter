const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    let card, card1, turn, turn1, turn2, userGuess

    beforeEach(function() {
        card = new Card();
        // turn = new Turn(userGuess, card);
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
        turn = new Turn('object', card);
        // turn2 = new Turn('array', card);
    });
    
    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });
    it('should be an instance of Turn', function(){
        expect(turn).to.be.an.instanceOf(Turn);
    });
    it('should be able to take in a user guess', function() {
        expect(turn.userGuess).to.equal('object');
    });
    it('should be able to return current card', function() {
        expect(turn.card).to.equal(card1);
    });
    it('should be able to return the user guess', function() {
        expect(turn.returnGuess(userGuess)).to.equal(turn.userGuess);
    });
    it('should be able to evaluate guess and give feedback', function() {
        expect(turn.evaluateGuess()).to.equal(true);
        expect(turn.giveFeedback()).to.equal(`correct!`)
    });
});
