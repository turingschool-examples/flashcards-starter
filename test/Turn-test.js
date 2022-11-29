const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
      });
    
    it('should accept a user\'s guess', function() {
        const turn = new Turn('This is my guess');
        expect(turn.userGuess).to.equal('This is my guess');
      });

    it('should contain a card object', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('This is my guess', card);
        expect(turn.currentCard).to.equal(card);  
    })
});