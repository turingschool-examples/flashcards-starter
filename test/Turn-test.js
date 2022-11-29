const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function() {
    let correctTurn;
    let newCard;
    beforeEach(function() {
        newCard = new Card({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
        correctTurn = new Turn('object', newCard);
    });
    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });
    it('should instantiate with the user guess', function() {
        expect(correctTurn).to.be.an.instanceof(Turn);
        expect(correctTurn.guess).to.equal('object');
    }); 
    it('should instantiate with the card as a property', function() {
        expect(correctTurn.card).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
    }); 
    it('should be able to return the user guess', function() {
        expect(correctTurn.returnGuess()).to.equal('object');
    }); 
    it('should be able to return the card', function() {
        expect(correctTurn.returnCard()).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
    }); 
    it('should evaluate whether the user guess matches the correct answer', function() {
        const incorrectTurn = new Turn ('array', newCard)

        expect(correctTurn.evaluateGuess()).to.equal(true);
        expect(incorrectTurn.evaluateGuess()).to.equal(false);
        expect(correctTurn.correct).to.equal(true)
        expect(incorrectTurn.correct).to.equal(false)
    });
    it('should evaluate whether the user guess matches the correct answer', function() {
        const incorrectTurn = new Turn ('array', newCard)
        incorrectTurn.evaluateGuess();
        correctTurn.evaluateGuess();
        expect(correctTurn.giveFeedback()).to.equal('correct!');
        expect(incorrectTurn.giveFeedback()).to.equal('incorrect!');
    });
});
