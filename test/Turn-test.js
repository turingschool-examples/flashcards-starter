const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it('should store the user/s guess', function() {
        const turn = new Turn('octopus');

        expect(turn.guess).to.equal('octopus');
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

    it('should tell us if the user guess matches the answer on the card')
    it('should throw a message if the guess was correct')
    it('should throw a message if guess was incorrect')
});