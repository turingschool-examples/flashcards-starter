const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    
    it.skip('should be a function', function() {
        const turn = new Turn();
        expect(turn).to.be.a('function');
    });

    it.skip('should be an instance of Turn', function () {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Card);
    });

    it.skip("should be able to return a user's guess", function() {
        const turn = new Turn('Is it option A?');
        const guess = turn.returnGuess();
        expect(guess).to.equal('Is it option A?');
    });
    
    it.skip('it should be able to return the current card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('Is it option A?', card);
        const turnCard = turn.returnCard(); 
        expect(turnCard).to.deep.equal(card);
    });

    it.skip("should be able to tell if the user's guess is correct", function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('Is it option A?', card);
        const incorrectAnswer = turn.evaluateGuess(); 
        expect(incorrectAnswer).to.equal(false);
        const turnTwo = new Turn('object', card);
        const correctAnswer = turnTwo.evaluateGuess();
        expect(correctAnswer).to.equal(true);
    });

    it.skip('should be able to say "incorrect!" and "correct!" depending on whether the user\'s guess is correct', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('Is it option A?', card);
        const response = turn.giveFeedback();
        expect(response).to.equal('incorrect!');
        const turnTwo = new Turn('object', card);
        const responseTwo = turnTwo.giveFeedback();
        expect(responseTwo).to.equal('correct!');
    })


});