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

    it('should store a user\'s guess and an instance of Card', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);

        expect(turn.guess).to.equal('array');
        expect(turn.card).to.equal(card);
    });

    it('should return a user\'s guess ', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);

        expect(turn.returnGuess()).to.equal('array');
    });

    it('should return the current card', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);

        expect(turn.returnCard()).to.equal(card);
    });

    it('should check if the user\'s guess matches the correct answer', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);

        expect(turn.evaluateGuess('array')).to.equal(false);
    });

    it('should return whether the user\'s guess is correct or not', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);

        expect(turn.giveFeedback('array')).to.equal('incorrect!');
    })

});