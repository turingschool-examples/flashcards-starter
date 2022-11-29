const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

    it.skip('should be a function', function() {
        const Turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it.skip('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(card).to.be.an.instanceof(Turn);
      });
    
    it.skip('should accept a user\'s guess', function() {
        const turn = new Turn('This is my guess');
        expect(turn.userGuess).to.equal('This is my guess');
      });

    it.skip('should contain a card object', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('This is my guess', card);
        expect(turn.currentCard).to.equal(card);  
    })
});