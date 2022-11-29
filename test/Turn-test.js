const chai = require('chai');
const expect = chai.expect;
const Turn = require ('../src/Turn');
const Card = require ('../src/Card');

describe ('Turn', function() {
//are we using beforeEach?
    // it('should be a function', () => {
    //     const turn = new Turn();
    //     expect(turn).to.be.a('function');
    // });

    it('should instantiate our good friend Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store the user guess as a string', () => {
        const turn = new Turn('user guess', Card);
        expect(turn.userGuess).to.be.a('string');
        expect(turn.userGuess).to.equal('user guess');
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should store an instance of the Card class', () => {
        const turn = new Turn('user guess', Card);
        expect(turn.card).to.be.an.instanceof(Card);
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should have a method that returns the guess', () => {
        const turn = new Turn('user guess', Card);
        turn.returnGuess();
        expect(turn.returnGuess()).to.equal(turn.userGuess);
    })
    it('should have a method that returns the card', () => {
        const turn = new Turn('user guess', Card);
        turn.returnCard();
        expect(turn.returnCard()).to.equal(turn.card);
    })
    it('should have a method that returns a boolean indicating if the user\'s guess matches the correct answer on the card', () => {
        const turn = new Turn('user guess', Card);
        turn.evaluateGuess();
        expect(false).to.be.false;
        expect(true).to.be.true;
    })

    it('should have a method that returns either "incorrect" or "correct" based on whether the guess is correct or incorrect', () => {
        const turn = new Turn('user guess', Card);
        turn.evaluateGuess();
        turn.giveFeedback();
        expect(false).to.be('incorrect!');
        expect(true).to.be('correct!');
    })

});