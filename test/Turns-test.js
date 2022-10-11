const chai = require('chai');
const Card = require('../src/Card');
const Turns = require('../src/Turns');
const expect = chai.expect;

describe('Turns', function() {

    it.skip('should be a function', function() {
        const turns = new Turns();
        expect(Turns).to.be.a('function');
    });

    it.skip('should store user\'s guess', function() {
        const turns = new Turns('otter');
        expect(turns.userGuess).to.equal('otter')
    });

    it.skip('should store Card class as argument', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turns = new Turns('guess', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
        expect(turns.card).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    });
    it.skip('should return the guess', function() {
        const turns = new Turns('object');
        expect(turns.returnGuess()).to.equal( 'object');
    });
    it.skip('should return the Card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'],'object')
        const turns = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        expect(turns.returnCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    });
    it.skip('should return true if user\'s guess is correct', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'],'object')
        const turns = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.evaluateGuess()).to.deep.equal(true)
    });
    it.skip('should return false if user\'s guess is incorrect', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'],'object')
        const turns = new Turns('array', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.evaluateGuess()).to.deep.equal(false)
    });
    it.skip('should return correct if guess is correct', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'],'object')
        const turns = new Turns('object', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.giveFeedback()).to.deep.equal('Correct!')
    });
    it.skip('should return incorrect if guess is incorrect', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'],'object')
        const turns = new Turns('array', {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});

        expect(turns.giveFeedback()).to.deep.equal('Incorrect!')
    })
})