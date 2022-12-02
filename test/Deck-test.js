const chai = require('chai')
const expect = chai.expect
const Deck = require('../src/Deck')

describe('Deck', function () {
    beforeEach(() => {
        deck = new Deck()
})
it('Should be a function', function () {
    expect(Deck).to.be.a('function')
})
it('Should have a cards array', function () {
    expect(deck.cards).to.be.an('array')
})
it('Should be able to have multiple cards', function () {
    expect(deck.cards).to.have.lengthOf(30)
})
it('Should return length of array', function (){
    expect(deck.countCards()).to.equal(30)
})
})