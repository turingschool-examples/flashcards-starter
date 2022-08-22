const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Turn', function() {
    let card;
    let turn;

    beforeEach(function() {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('array', card);
    })

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn)
    })
   
    it('should return a user\'s guess', function() {
        expect(turn.guess).to.equal('array');
    })

    it('should return the current instance of Card in play', function() {
        expect(turn.card.id).to.equal(card.id)
        expect(turn.card).to.be.an.instanceOf(Card);
    })

    it('should evaluate the user\'s guess', function() {
        expect(turn.evaluateGuess()).to.equal(false);
    })

    it('should be give user feedback on their guess', function() {
        expect(turn.giveFeedback()).to.equal('Incorrect!');
    }) 
});