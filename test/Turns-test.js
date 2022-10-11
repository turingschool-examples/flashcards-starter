const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turns.js');
const Card = require('../src/Card')

describe('Turns', () => {
    
    it.skip('should be a function', () => {
        expect(Turns).to.be.a('function')
    })

    it.skip('should an instance of Turn', () => {
        const Turns = new Turns()

        expect(Turns).to.be.a.instanceOf(Turns)
    })

    it.skip('should have a guess', () => {
        const turns = new Turns('object')

        expect(turns.guess).to.equal('object')
    })

    it.skip('should have a card', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object')
        const turns = new Turns('object', card)

        expect(turn.card.question).to.deep.equal('What allows you to define a set of related information using key-value pairs?')
        expect(turn.guess).to.equal('object')
    })

    it.skip('should return the guess', () => {
        const turns = new Turns('guess')

        expect(turns.returnGuess()).to.equal('guess')
    })

    it.skip('should return the card', () => {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turn = new Turn('array', card)

        expect(turn.returnCard()).to.be.an.instanceof(Card)    
    })

    it.skip('should determine the correct answer', () => {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turn1 = new Turn('array', card)
        const turn2 = new Turn('object', card)

        expect(turn1.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false)
    })

    it.skip('should give feedback', () => {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turn1 = new Turn('array', card)
        const turn2 = new Turn('object', card)

        expect(turn1.giveFeedback()).to.equal('Correct!')
        expect(turn2.giveFeedback()).to.equal('Incorrect!')
    })
})