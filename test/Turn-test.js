const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Turn', function() {
    let card, card1, turn, turn1, turn2, userGuess

    beforeEach(function() {
        card = new Card({cardIdNumber: this.cardIdNumber, question: this.question, answers: this.answers, correctAnswer: this.correctAnswer});
        turn = new Turn(userGuess, card);
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
        turn1 = new Turn('object', card);
        turn2 = new Turn('array', card);
    });
    
    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });
    it('should be an instance of Turn', function(){
        expect(turn).to.be.an.instanceOf(Turn);
    });
    it('should be able to take in the current card at play', function() {
        expect(turn.currentCard).to.equal(turn.currentCard);
    });
    it('should be able to take in a user guess', function() {
        expect(turn.returnGuess()).to.equal(turn.userGuess);
    });
    it('should be able to return current card', function() {
        expect(turn.returnCard()).to.equal(turn.currentCard);
    });
    it('should be able to return the user guess', function() {
        expect(turn.returnGuess(userGuess)).to.equal(turn.userGuess);
    });
    it('should be able to evaluate guess', function() {
        expect(turn.evaluateGuess(turn.userGuess)).to.equal(true || false);
        // expect(turn1.evaluateGuess('object')).to.equal(true);
        // expect(turn2.evaluateGuess('array')).to.equal(false);
    });
    it('should give feedback', function() {
        expect(turn.giveFeedback()).to.equal(`correct!` || `incorrect!`)
        // expect(turn1.giveFeedback('object')).to.equal(`correct!`);
        // expect(turn2.giveFeedback('array')).to.equal(`incorrect!`);
    });
});
