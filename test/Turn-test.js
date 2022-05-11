const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', () => {
    let turn;
    let card;
    
    beforeEach(() => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('object', card)
    })
    
    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });
    
    it('should take in a string as an argument', () => {
        expect(turn.guess).to.be.a('string');
    });
    
    it('should take in a Card instance as a second argument', () => {
        expect(turn.card).to.be.an.instanceOf(Card)
    })
    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    })
    it('should have a method that returns the guess', () => {
        expect(turn.returnGuess()).to.equal('object');
     })
    it('should have a method that returns the card', () => {
        expect(turn.returnCard()).to.equal(card);
    })
    it('should be able to evaluate the guess', () => {
        expect(turn.evaluateGuess()).to.equal(true);
    })
    it('should be able to give feedback based on the test', () => {
        expect(turn.giveFeedback()).to.equal('correct!');
    })
 })
