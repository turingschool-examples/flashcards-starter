const chai = require('chai');
const Card = require('../src/Card.js');
const expect = chai.expect;
const data = require('../src/data.js');
const Turn = require('../src/Turn');

describe('Turn', function () {
    
    it('Should be a function', function () {
        const turn = new Turn()
        expect(Turn).to.be.a('function')
    });

    it('Should be able to take in a player guess', function () {
        
        const guess = 'object'
        const turn = new Turn(guess);
        

        expect(turn.playerGuess).to.equal('object')
    });

    it('Should should be able to take in an instance of card', function () {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

        const playerGuess = 'object'
        const turn = new Turn(playerGuess, card);

        expect(turn.card).to.equal(card)
    });

    it('Should be able to return a guess', function() {
        
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

        const playerGuess = 'object'
        const turn = new Turn(playerGuess, card);

        expect(turn.returnGuess()).to.equal(playerGuess);
    });

    it('Should be able to return the instance of card', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

        const playerGuess = 'object'
        const turn = new Turn(playerGuess, card);
        
        expect(turn.returnCard()).to.equal(card)
    });

    it('Should be able to evaluate the players guess', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

        const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')

        const playerGuess = 'object'
        const turn = new Turn(playerGuess, card);
        const turn2 = new Turn(playerGuess, card2)

        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false)
    });

    it('Should should give feedback based on the players guess', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

        const card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')

        const playerGuess = 'object'
        const turn = new Turn(playerGuess, card);
        const turn2 = new Turn(playerGuess, card2)

        turn.evaluateGuess()
        turn2.evaluateGuess()

        expect(turn.giveFeedback()).to.equal('That is correct!')
        expect(turn2.giveFeedback()).to.equal('That is incorrect!')
    });

}); 