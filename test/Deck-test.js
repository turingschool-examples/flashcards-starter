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

      it('should return card count', () => {
        let card = new Card(1, 'whats my name', ['john' ,'katie','joe'],'john')
        let deck = new Deck([card])
        expect(deck.countCards()).to.equal(1)
      })
})