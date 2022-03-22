const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')

const Turn = require('../src/Turn')

describe('Turn', function() {
    it('should be a function', function() {
        const turn = new Turn()
        expect(Turn).to.be.a('function');
    })
    it('should have the current card in play', function() {
        const card = new Card(1, 'What is this animal', ['pig', 'otter', 'pub'], 'otter')
        const turn = new Turn('penguin', card)
        expect(turn.currentCard).to.equal(card);
    })
    it('should return the user\'s guess', function() {
        const card = new Card()
        const turn = new Turn('penguin', card)

        turn.returnGuess()

        expect(turn.returnGuess()).to.equal('penguin');
    })
    it('should return the card', function() {
        const card = new Card(1, 'What is between 2 and 4', [1, 3, 5, 2], 3)
        const turn = new Turn('2', card)

        turn.returnCard();

        expect(turn.returnCard()).to.equal(card);
    })
})