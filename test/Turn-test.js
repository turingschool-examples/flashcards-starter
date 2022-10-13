const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', () => {
    let card, turn, turn2;
    beforeEach(() => {
        card = new Card(1, 'What is my name?', ['Jerry', 'Fritz', 'Evan'], 'Evan');
        turn = new Turn('Evan', card);
        turn2 = new Turn('Jerry', card);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should take in a user guess and current card', () => {
        expect(turn.userGuess).to.equal('Evan');
        expect(turn.currentCard).to.equal(card);
    });
  
    it('should return the user guess', () => {
        expect(turn.returnGuess()).to.equal('Evan');
    });

    it('should return the current card', () => {
        expect(turn.returnCard()).to.equal(card);
    });

    it('should evaluate if the guess matches the answer', () => {
        expect(turn.evaluateGuess()).to.equal(true);
        expect(turn2.evaluateGuess()).to.equal(false);
    });

    it('should give feedback based on if it is true or false', () => {
        expect(turn.giveFeedback()).to.equal('correct!');
        expect(turn2.giveFeedback()).to.equal('incorrect!');
    });
});