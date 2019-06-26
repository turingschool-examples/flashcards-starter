const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('../src/data');
const allCards = data.prototypeData;

describe('Deck', function(){

  it('should be a function', function() {
    const deck = new Deck();
    
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function(){
    const deck = new Deck(allCards);
    
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should count number of cards in deck', function() {
    const deck = new Deck(allCards);
   
    expect(deck.countCards()).to.equal(30);
  });
});