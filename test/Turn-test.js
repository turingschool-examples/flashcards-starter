const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

    it('should be a function', function () {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function () {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should have a user\'s guess', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.userGuess).to.equal('string');
    });

    it('should have a card', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.currentCard).to.equal(card);
    });

    it('should return the user\'s guess', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.returnGuess()).to.equal('string');
    });

    it('should return the card', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.returnCard()).to.deep.equal(card);
    });

    it('should evaluate user\'s guess to false', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should evaluate user\'s guess to true', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should give feedback on user\'s guess if wrong', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal("incorrect!");
    });

    it('should give feedback on user\'s guess if right', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal("correct!");
    });
});