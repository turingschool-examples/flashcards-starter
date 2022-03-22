const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')

const Turn = require('../src/Turn')

describe('Turn', function() {
    it('should be a function', function() {
        const turn = new Turn()
        expect(Turn).to.be.a('function');
    })
    it('should have a user\'s guess', function() {
        const turn = new Turn('otter')
        expect(turn.userGuess).to.equal('otter');
    })
    it('should have the current card in play', function() {
        const card = new Card(1, 'What is this animal', ['pig', 'otter', 'pub'], 'otter')
        const turn = new Turn('penguin', card)
        expect(turn.userGuess).to.equal('penguin');
        expect(turn.currentCard).to.equal(card);
    })
})