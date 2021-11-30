const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('user guess should be a string', function() {
        const turn = new Turn('octopus');

        expect(turn.guess).to.be.a('string');

    });

    it('should store the user/s guess', function() {
        const turn = new Turn('octopus');

        expect(turn.guess).to.equal('octopus');
    });

    it('should have the instantiated card passed in be an object', function() {
        const card1 = new Card();
        const turn = new Turn('child', card1);

        expect(turn.playedCard).to.be.an('object');
    })

    it('should store the card that is currently being played', function () {
        const card1 = new Card();
        const turn = new Turn('octopus', card1);

        expect(turn.playedCard).to.equal(card1);
    })

    it('should take in and return a user/s guess', function() {
        const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object' );
        const turn = new Turn('octopus', card2);
        
        turn.returnGuess();

        expect(turn.returnGuess()).to.equal('octopus');
    })

    it('should return the card that was being played', function() {
        const card3 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object' );
        const turn = new Turn('turtle', card3);

        turn.returnCard();

        expect(turn.returnCard()).to.equal(card3);
    })

    it('should tell us if the user guess matches the answer on the card', function() {
        const card4 = new Card(4, 'whats love got to do with it?', ['second', 'hand', 'emotion'], 'firehose');
        const turn = new Turn('firehose', card4)

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(true);
    })

    it('should throw a message if the guess was correct', function() {
        const card5 = new Card(6, 'do you believe in life after love?', ['monkeys', 'llamas'], 'hollywood');
        const turn = new Turn('hollywood', card5)

        turn.giveFeedback();

        expect(turn.giveFeedback()).to.equal('Correct!');
    })

    it('should throw a message if guess was incorrect', function() {
        const card5 = new Card(6, 'do you believe in life after love?', ['monkeys', 'llamas'], 'hollywood');
        const turn = new Turn('marmalade', card5)

        turn.giveFeedback();

        expect(turn.giveFeedback()).to.equal('Incorrect!');
    })
});