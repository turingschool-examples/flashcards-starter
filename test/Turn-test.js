const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    let card1, turn;
    beforeEach(() => {
        card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        turn = new Turn('blue', card1);

    })

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should have a guess', function() {
        expect(turn.guess).to.be.a('string');
    })

    it('should have guess be a word', function() {

        expect(turn.guess).to.not.be.a('number')
    })

    it('should have a card', function() {
        expect(turn.card).to.be.an.instanceof(Card);
    })

    it('should return a guess', function() {
        expect(turn.returnGuess()).to.equal('blue');
    })

    it('should return the card', function() {
        expect(turn.returnCard()).to.equal(turn.card);
    })

    it('should evaluate a guess', function() {
        expect(turn.evaluateGuess()).to.be.a('boolean')
    })


    it('should give feeback', function() {
        expect(turn.giveFeedback()).to.be.a('string');
    })

    it('should give correct feedback', function() {
        expect(turn.giveFeedback()).to.equal('correct!')
    })
})