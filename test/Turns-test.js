const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turns.js');
const Card = require('../src/Card')

describe('Turns', () => {
    
    it('should be a function', () => {
        expect(Turns).to.be.a('function')
    })

    it('should an instance of Turn', () => {
        const turns = new Turns()

        expect(turns).to.be.a.instanceOf(Turns)
    })

    it('should have a guess', () => {
        const turns = new Turns('object')

        expect(turns.guess).to.equal('object')
    })

    it('should have a card', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object')
        const turns = new Turns('object', card)

        expect(turns.card.question).to.deep.equal('What allows you to define a set of related information using key-value pairs?')
        expect(turns.guess).to.equal('object')
    })

    it('should return the guess', () => {
        const turns = new Turns('guess')

        expect(turns.returnGuess()).to.equal('guess')
    })

    it('should return the card', () => {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turns = new Turns('array', card)

        expect(turns.returnCard()).to.be.an.instanceof(Card)    
    })

    it('should determine the correct answer', () => {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turns1 = new Turns('array', card)
        const turns2 = new Turns('object', card)

        expect(turns1.evaluateGuess()).to.equal(true)
        expect(turns2.evaluateGuess()).to.equal(false)
    })

    it('should give feedback', () => {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turns1 = new Turns('array', card)
        const turns2 = new Turns('object', card)

        expect(turns1.giveFeedback()).to.equal('Correct!')
        expect(turns2.giveFeedback()).to.equal('Incorrect!')
    })
})