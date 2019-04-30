const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should have a method that test the number of cards in the Deck', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, guy!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah, guy!'], 'hell yeah, guy!');
    const cards = [card1, card2];
    const deck = new Deck(cards);
    expect(deck.countCards()).to.equal(2);
  });   
});