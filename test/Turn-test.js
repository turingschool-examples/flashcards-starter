
const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

    it.skip('should be instantiated with two arguments', function() {
        const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
        const turn = new Turn('blue crane', card);
        expect(turn.guess).to.equal('blue crane');
        expect(turn.card).to.be.an.instanceof(Card);
    });

    it.skip('should have a method that returns the guess', function() {
        const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
        const turn = new Turn('blue crane', card);
        expect(turn.returnGuess()).to.equal('blue crane');
    });

    it.skip('should have a method that returns the card', function() {
        const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
        const turn = new Turn('blue crane', card);
        expect(turn.returnCard()).to.equal(turn.card)
        expect(turn.returnCard()).to.be.an.instanceof(Card);
    });

    it.skip('should have a method that returns a boolean indicating if the users guess is CORRECT', function() {
        const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
        const turn = new Turn('blue crane', card);
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it.skip('should have a method that returns a boolean indicating if the users guess is INCORRECT', function() {
        const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
        const turn = new Turn('secretary bird', card);
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it.skip('should have a method that returns an appropriate message if the users answer was CORRECT', function() {
        const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
        const turn = new Turn('blue crane', card);
        expect(turn.giveFeedback()).to.equal('correct!');
    });

    it.skip('should have a method that returns an appropriate message if the users answer was INCORRECT', function() {
        const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
        const turn = new Turn('secretary bird', card);
        expect(turn.giveFeedback()).to.equal('incorrect!');
    });
});