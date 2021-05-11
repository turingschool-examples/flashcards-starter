const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

let card1, card2, card3, cards, deck

beforeEach( () => {
  card1 = new Card(6, 'What is an example of a mutator method?',["sort()", "map()", "join()"], "sort()");
  card2 = new Card(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function")
  card3 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
  cards = [card1, card2, card3]
  deck = new Deck(cards);
})

describe('Deck', () => {
  
  it('should instantiate a deck of cards', () => {

    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should store the cards', () => {

    expect(deck.cards).to.equal(cards)
  })
})

describe('countCards', () => {

  it('should be a function', () => {
    
    expect(deck.countCards).to.be.a('function');
  });

  it('should count how many cards are in the deck', () => {

    deck.countCards()

    expect(deck.countCards()).to.equal(3)
  })
})