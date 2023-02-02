const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = "object"
    const turn = new Turn(guess ,card);

    it('should store a card', function() {
        expect(turn.returnCard()).to.equal(card);
    }); 

    it('should store a guess', function() {
        expect(turn.returnGuess()).to.equal(guess);
    }); 

    it('should store a evaluate a guess', function() {
        expect(turn.evaluateGuess()).to.equal(true);
    }); 

    it('should store give feedback', function() {
        var result = turn.evaluateGuess()
        expect(turn.giveFeedback(result)).to.equal("Correct")
    }); 

  })