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

    it('should store the card that is being answered')
    it('should take in and return a user/s guess')
    it('should return the card that was played')
    it('should tell us if the user guess matches the answer on the card')
    it('should throw a message if the guess was correct')
    it('should throw a message if guess was incorrect')
});