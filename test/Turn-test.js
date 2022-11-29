const chai = require('chai');
const expect = chai.expect;
const Turn = require ('../src/Turn');
const Card = require ('../src/Card');

describe ('Turn', function() {

    it('should be a function', () => {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should instantiate our good friend Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store the user guess as a string', () => {
        const turn = new Turn('user guess', Card);
        expect('userguess').to.be.a('string');
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should store an instance of the Card class', () => {
        const turn2 = new Turn('user guess', Card);
        expect(Card).to.be.an.instanceof(Card);
        expect(turn2).to.be.an.instanceof(Turn);
    })

    it('should have a method that returns the guess', () => {
        turn2.returnGuess();
        expect(turn2.returnGuess()).to.equal(turn2.guess);
    })
    it('should have a method that returns the card', () => {
        turn2.returnCard();
        expect(turn2.returnCard()).to.equal(turn2.card);
    })
    it('should have a method that returns a boolean indicating if the user\'s guess matches the correct answer on teh card', () => {
        turn2.evaluateGuess();
    })
    it('should have a method that returns either "incorrect" or "correct" based on whether the cuess is correct or incorrect', () => {
        turn2.giveFeedback();
    })

});