const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let card, turn;

    beforeEach(() => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('guess', card);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should store a user\'s guess and an instance of Card', () => {
        expect(turn.guess).to.equal('guess');
        expect(turn.card).to.equal(card);
    });

    it('should return a user\'s guess ', () => {
        expect(turn.returnGuess()).to.equal('guess');
    });

    it('should return the current card', () => {
        expect(turn.returnCard()).to.equal(card);
    });

    it('should check if the user\'s guess matches the correct answer', () => {
        const turn1 = new Turn('object', card);
        expect(turn1.evaluateGuess('guess')).to.equal(true);
    });

    it('should check if the user\'s guess does not match correct answer', () => {
        expect(turn.evaluateGuess('guess')).to.equal(false);
    });

    it('should return whether the user\'s guess is incorrect', () => {
        expect(turn.giveFeedback('guess')).to.equal('incorrect!');
    })

    it('should return whether the user\'s guess is correct', () => {
        const turn1 = new Turn('object', card);
        expect(turn1.giveFeedback('guess')).to.equal('correct!');
    })
});