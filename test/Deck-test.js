const chai = require('chai')
const expect = chai.expect
const Card = require('../src/Card')
const Turns = require('../src/Turns')
const Deck = require('../src/Deck')

describe('Deck', () => {
    
    it('should be an instance of deck', () => {
        let deck = new Deck()
        expect(deck).to.be.an.instanceof(Deck)
      })
})