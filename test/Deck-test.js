const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
    let card, deck;
   
    this.beforeEach(() => {
        const card1 = new Card( 2,"What is a comma-separated list of related values?",["array", "object", "function"], "array");
        const card2 = new Card( 3,"What type of prototype method directly modifies the existing array?",["mutator method", "accessor method", "iteration method"],"mutator method"); 
        const card3 = new Card( 4,"What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"],"accessor method");

         deck = new Deck([card1, card2, card3]);
    });

    it('should be a function',() => {
        expect(Deck).to.be.a('function');
    })

    it('should be an instance of Deck',() => { 
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should store multiple cards',() => {
        expect(deck.cards).to.equal([card1, card2, card3]);
    })
})