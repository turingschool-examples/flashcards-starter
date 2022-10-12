const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {
    let deck, card1, card2, card3, card4

    beforeEach(() => {
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        deck = new Deck([card1, card2, card3])
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function')
    })

    it('should be an instance of Deck', () => {
        expect(deck).to.be.a.instanceOf(Deck)
    })

    it('should have an array of cards', () => {
        expect(deck.cards[0].correctAnswer).to.deep.equal('object')
        expect(deck.cards[1].correctAnswer).to.deep.equal('array')
    })

    it('should count the cards in a deck', () => {
        expect(deck.countCards()).to.equal(3)
    })

})