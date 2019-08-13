const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should store cards', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'How tall is William', ['60 inches', '68 inches', '72 inches'], '68 inches');
    const card3 = new Card(3, 'What color are my shoes?', ['red', 'brown', 'blue'], 'blue');
    const cards = [card, card2, card3];
    const deck = new Deck(cards);
    expect(deck.cards).to.deep.equal(cards);
  });  

  it('be able to count cards', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'How tall is William', ['60 inches', '68 inches', '72 inches'], '68 inches');
    const card3 = new Card(3, 'What color are my shoes?', ['red', 'brown', 'blue'], 'blue');
    const cards = [card, card2, card3];
    const deck = new Deck(cards);
    expect(deck.countCards()).to.equal(3);
  });

})