const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should take in a user guess and current card', function() {
        const card = new Card(1, 'What is my name?', ['Jerry', 'Fritz', 'Evan'], 'Evan');
        const turn = new Turn('Evan', card);
        expect(turn.userGuess).to.equal('Evan');
        expect(turn.currentCard).to.equal(card);
    });
  
    it('should return the user guess', function() {
        const card = new Card(1, 'What is my name?', ['Jerry', 'Fritz', 'Evan'], 'Evan');
        const turn = new Turn('Evan', card);
        expect(turn.returnGuess()).to.equal('Evan');
    });

    it('should return the current card', function() {
        const card = new Card(1, 'What is my name?', ['Jerry', 'Fritz', 'Evan'], 'Evan');
        const turn = new Turn('Evan', card);
        expect(turn.returnCard()).to.equal(card);
    });

    it('should evaluate if the guess matches the answer', function() {
        const card = new Card(1, 'What is my name?', ['Jerry', 'Fritz', 'Evan'], 'Evan');
        const turn = new Turn('Evan', card);
        expect(turn.evaluateGuess()).to.equal(true);

        const turn2 = new Turn('Jerry', card);
        expect(turn2.evaluateGuess()).to.equal(false);
    });

    it('should give feedback based on if it is true or false', function() {
        const card = new Card(1, 'What is my name?', ['Jerry', 'Fritz', 'Evan'], 'Evan');
        const turn = new Turn('Evan', card);
        expect(turn.giveFeedback()).to.equal('correct!');

        const turn2 = new Turn('Jerry', card);
        expect(turn2.giveFeedback()).to.equal('incorrect!');
    });
});