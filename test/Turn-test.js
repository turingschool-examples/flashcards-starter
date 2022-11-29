const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function() {
    let correctTurn;
    let incorrectTurn;
    let newCard;
    beforeEach(function() {
        correctTurn = new Turn('object');
        incorrectTurn = new Turn ('array')
        newCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    });
    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });
    it('should instantiate with the user guess', function() {
        expect(correctTurn).to.be.an.instanceof(Turn);
        expect(correctTurn.guess).to.equal('object');
    }); 
    // it('', function() {
    //     expect().to.equal('');
    // }); 
});
