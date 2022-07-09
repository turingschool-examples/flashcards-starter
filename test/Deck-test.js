const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Deck', function() {

    let deck
    let cardOne 
    let cardTwo
    
    beforeEach(() => {
           
        deck = new Deck([cardOne, cardTwo]);
        cardOne = new Card(3, "How many capitals in a state?", ["three", "one", "ten"], "one");
        cardTwo = new Card(8, "The sky is blue", "true");

        });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });
    
    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceof(Deck);
    }); 
      
    it('should have cards in the deck', () => {
        expect(deck.cards).to.deep.equal([cardOne, cardTwo]);
    });

    it('should know how many cards are in the deck', () => {
        expect(deck.cardCounter()).to.equal(2);
        
    });

    });
