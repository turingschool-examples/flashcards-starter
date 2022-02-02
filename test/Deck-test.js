const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', ()=> {

  it('should be a function', ()=> {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', ()=> {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should contain an array of card objects', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardDeck1 = [card1, card2, card3];
    const deck = new Deck(cardDeck1);
    expect(deck.cardDeck).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardDeck1 = [card1, card2, card3];
    const deck = new Deck(cardDeck1);
    expect(deck.cardCount).to.deep.equal(3);
  });

});
