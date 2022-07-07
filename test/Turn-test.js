const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let turn;
    let card

    beforeEach(() => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('object', card);

    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');

    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);

    });

    it('should have users guess', () => {
        expect(turn.userGuess).to.equal('object');

    });

    it('should have current card', () => {
        expect(turn.currentCard).to.equal(card);

    });

    it('should return users guess', () => {
        const usersGuess = turn.returnGuess();
        expect(usersGuess).to.equal('object');

    });

    it('should return current card', () => {
        const currentCard = turn.returnCard();
        expect(currentCard).to.equal(card);

    });

    it('should return boolean indicating answers correctness', () => {
        const isCorrect = turn.evaluateGuess();
        expect(isCorrect).to.equal(true);

    })

    it('should say if guess is correct', () => {
        const feedBack = turn.giveFeedback();
        expect(feedBack).to.equal('correct!');

    })

    it('should say if guess is incorrect', () => {
        turn.userGuess = 'array';
        const feedBack = turn.giveFeedback();
        expect(feedBack).to.equal('incorrect!');

    });
});