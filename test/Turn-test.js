const chai = require('chai')
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const expect = chai.expect

describe('Turn', () => {
    it('should return true', () => {
        expect(true).to.equal(true)
    })

    it('should take arguments', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card)
        expect(turn.guess).to.equal('object')
        expect(turn.card).to.equal(card)
    })

    it('should return a guess', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card)
        expect(turn.returnGuess()).to.equal('array')
    })

    it('should return a card', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card)
        expect(turn.returnCard()).to.equal(card)
    })

    it('should check for accuracy', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card)
        expect(turn.evaluateGuess()).to.equal(true)
    })

    it('should give the user feedback', () => {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card)
        expect(turn.giveFeedback()).to.equal('correct!')
    })
})
