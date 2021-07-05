const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

    it('should be a function', () => {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it.skip('should store a user\'s guess and an instance of Card', () => {
        const card = new Card();
        const turn = new Turn();

        expect(turn.guess).to.equal('guess');
        expect(turn.card).to.equal(card);
    });

    it.skip('should return a user\'s guess ', () => {
        const turn = new Turn(usersGuess, card);
        expect(turn.returnGuess()).to.equal();
    });

    it.skip('should return the current card', () => {
        const turn = new Turn();
        expect(turn.returnCard()).to.equal();
    });

    it.skip('should check if the user\'s guess matches the correct answer', () => {
        const turn = new Turn();
        expect(turn.evaluteGuess()).to.equal();
    });

    it.skip('should return whether the user\'s guess is correct or not', () => {
        const turn = new Turn();
        expect(turn.giveFeedback()).to.equal();
    })

});