const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let card1
    let card2
    let card3
    beforeEach(() =>{
        card1 = new Card( 19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"],"boolean")
        card2 = new Card( 20, "forEach() returns an array",["true", "false"], "false")
        card3 = new Card(21,"Which iteration method is best for DOM manipulation?", ["forEach()", "map()", "reduce()"], "forEach()")
    });

    it('should be a function', function() {
      expect(Deck).to.be.a('function')
    })    
    
    it('should be able to create an instantiation', function() {
        const deck = new Deck()

        expect(deck).to.be.an.instanceOf(Deck)
    })

    it('should be able to hold cards', function() {
        const deck = new Deck([card1, card2, card3]);
        expect(deck.cards).to.deep.equal([card1, card2, card3])
    })

    it('should be able to count the cards', function() {
        const deck = new Deck([card1, card2, card3]);
        expect(deck.countCards()).to.equal(3)
    })
})