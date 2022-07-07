const chai = require('chai');
const expect = chai.expect;
 
const Deck = require('../src/Deck');
const Card = require('../src/Card');



describe('Deck', () => {
    let card1;
    let card2;
    let card3;
    let newDeck;
  
    beforeEach(() => {
      
      card1 = new Card(9, 'What does the callback function for find() return?', ["boolean", "array", "object"], 'boolean');
      card2 = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ["reduce()", "map()", "filter()"], 'reduce()');
      card3 = new Card(22, 'Which prototype method is used to iterate over each property of an object?', ["Object.keys()", "Object.values()", "reduce()"], 'Object.keys()');
      newDeck = new Deck([card1, card2, card3])
    })
    it('should be a function', () => {
     
      expect(Deck).to.be.a('function');
    })
    it('should be an instance of Deck', () => {
    
        expect(newDeck).to.be.an.instanceof(Deck);
      });
      it('It should know how many Cards are in the Deck.', () => {
    
        expect(newDeck.countCards()).to.be.equal(newDeck.cardQuantity);
      });

    });
    