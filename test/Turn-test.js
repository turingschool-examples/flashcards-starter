const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function() {
    let correctTurn;
    let incorrectTurn;
    let newCard;
    beforeEach(function() {
        newCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        correctTurn = new Turn('object', newCard);
        incorrectTurn = new Turn ('array', newCard)
    });
    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });
    it('should instantiate with the user guess', function() {
        expect(correctTurn).to.be.an.instanceof(Turn);
        expect(correctTurn.guess).to.equal('object');
    }); 
    it('should instantiate with the card as a property', function() {
        expect(correctTurn.card).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', choices: ['object', 'array', 'function'], correctAnswer: 'object' });
    }); 
    it('should be able to return the user guess', function() {
        expect(correctTurn.returnGuess()).to.equal('object');
    }); 
    it('should be able to return the card', function() {
        expect(correctTurn.returnCard()).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', choices: ['object', 'array', 'function'], correctAnswer: 'object' });
    }); 
});
