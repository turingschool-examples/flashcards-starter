const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  let card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'Question 1', ['no', 'nope', 'yes'], 'yes');
    card2 = new Card(2, 'Question 2', ['no', 'nope', 'yes'], 'no');
    card3 = new Card(3, 'Question 3', ['no', 'nope', 'yes'], 'nope');
    deck = new Deck([card1, card2, card3]);
  })

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold a list of cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });

  it('should know how many cards are in the Deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});
