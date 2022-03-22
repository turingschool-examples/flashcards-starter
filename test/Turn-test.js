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
    it('should be false if answer is wrong', function() {
        const card = new Card(3, 'What is H2O', ['water', 'iron', 'tungsten', 'oxygen'], 'water')
        const turn = new Turn('iron', card)

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(false)
    })
    it('should be true if answer is correct', function() {
        const card = new Card(3, 'What is H2O', ['water', 'iron', 'tungsten', 'oxygen'], 'water')
        const turn = new Turn('water', card)

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(true)
    })
    it('should give feedback based on if it is correct or incorrect', function() {
        const card = new Card(2, 'What is the color of the the ocean', ['blue', 'red', 'orange', 'purple'], 'blue')
        const turn = new Turn('red', card);
        const turn2 = new Turn('blue', card);
        
        turn.giveFeedback();
        turn2.giveFeedback();
        
        expect(turn.giveFeedback()).to.equal('Incorrect!');
        expect(turn2.giveFeedback()).to.equal('Correct!')
    })
})