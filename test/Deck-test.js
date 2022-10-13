const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const dataArray = require('../src/data').prototypeData


const cardArray = dataArray.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))

describe('Deck', function() {

    it('should store an array of cards', () => {
        const deck = new Deck(cardArray)
        expect(deck.cards).to.deep.equal(cardArray)
    }) 

    it('should know how many cards are in the deck', () => {
        const deck = new Deck(cardArray)
        expect(deck.countCards()).to.equal(cardArray.length)
    })
})