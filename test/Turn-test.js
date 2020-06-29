const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

    it.skip('should be a function', function () {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it.skip('should have a user\'s guess', function () {
        const turn = new Turn('string', card);
        expect(turn.userGuess).to.equal('string');
    });

    it.skip('should have a card', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.currentCard).to.equal(card);
    });

    it.skip('should be an instance of Turn', function () {
        const turn = new turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it.skip('should return the user\'s guess', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.returnGuess()).to.equal('string');
    });

    it.skip('should return the card', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.returnCard()).to.deep.equal(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    });

    it.skip('should evaluate user\'s guess to false', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it.skip('should evaluate user\'s guess to true', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it.skip('should give feedback on user\'s guess if wrong', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('string', card);
        expect(turn.giveFeedback()).to.deep.equal("incorrect!");
    });

    it.skip('should give feedback on user\'s guess if right', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.giveFeedback()).to.deep.equal("correct!");
    });
});