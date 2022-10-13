const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const cardArray = require('../src/data').prototypeData

describe('Deck', function() {

    it('should store an array of cards', () => {
        const deck = new Deck(cardArray)
        expect(Deck.cards).to.deep.equal(cardArray)
    }) 

    it('should know how many cards are in the deck', () => {
        const deck = new Deck(cardArray)
        expect(Deck.countCards()).to.equal(cardArray.length)
    })
})