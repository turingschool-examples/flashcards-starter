const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let turn;
    let incorrectTurn;
    let card;
    beforeEach(() => {
        card = new Card(1, 
            "Who was the first president of the USA?", 
            ['John Adams', 'George Washington', 'Barack Obama', 'Abraham Lincoln'],
            'George Washington');
        turn = new Turn('George Washington', card);
        incorrectTurn = new Turn('John Adams', card);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.instanceOf(Turn);
    });

    it('should store a user\'s guess', () => {
        expect(turn.guess).to.equal('George Washington');
    });
    
    it('should store a card', () => {
        expect(turn.card).to.deep.equal(card);
    });

    it('should return a guess', () => {
        expect(turn.returnGuess()).to.equal('George Washington');
    });

    it('should return a Card', () => {
        expect(turn.returnCard()).to.deep.equal(card);
    });

    it('should be able to evaluate a correct guess', () => {
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should be able to evaluate an incorrect guess', () => {
        expect(incorrectTurn.evaluateGuess()).to.equal(false);
    });
    
    it('should be able to give feedback on a correct guess', () => {
        expect(turn.giveFeedback()).to.equal('correct!')
    });

    it('should be able to give feedback on an incorrect guess', () => {
        expect(incorrectTurn.giveFeedback()).to.equal('incorrect!')
    });
});
