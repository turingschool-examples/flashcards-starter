const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

const card1 = new Card (1, 'Where?', ['CO', 'NV', 'AZ'], 'CO')
const card2 = new Card (2, 'Where?', ['CO', 'NV', 'AZ'], 'NV')
const card3 = new Card (3, 'Where?', ['CO', 'NV', 'AZ'], 'AZ')

describe('Deck', () => {

    let deck;

    beforeEach(() => {
        deck = new Deck([card1, card2, card3])
    })

    it('should be a function', () => {
        expect(Deck).to.be.a('function')
    });

    it('should be an instance of a deck', () => {
        expect(deck).to.be.an.instanceOf(Deck)
    });

    it('should take data array as an argument', () => {
        expect(deck.cards).to.be.a('array')
    });

    it('should check array length', () =>{
        expect(deck.countCards()).to.equal(3)
    });
})