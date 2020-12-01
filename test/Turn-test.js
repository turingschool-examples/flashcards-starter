const chai = require('chai');
const Turn = require('../src/Turn');
const expect = chai.expect;

const Card = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of a Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should be able to store a guess', function() {
        const turn = new Turn('Up on the mountain');
        expect(turn.guess).to.equal('Up on the mountain');
    });

    it('should be able to store a card object', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('Up on the mountain', card);
        expect(turn.currentCard).to.deep.equal(card);
    });
    it('should return the guess', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('Up on the mountain', card);
        expect(turn.returnGuess()).to.equal('Up on the mountain');
    });
    it('should return the card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('Up on the mountain', card);
        expect(turn.returnCard()).to.equal(card);
    });
})