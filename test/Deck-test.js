const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Tom\'s favorite music genre?', ['techno', 'metal', 'classic rock'], 'techno');
    card2 = new Card(2, 'What is Tom\'s favorite live music venue?', ['The Fillmore', 'Red Rocks', 'Mission Ballroom'], 'Red Rocks');
    card3 = new Card(3, 'Who is Tom\'s favorite music producer?', ['Adam Beyer', 'Joris Voorn', 'Eric Prydz'], 'Eric Prydz');
  });

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should be a new instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be initialized with an array of card objects', function() {
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the number of cards in the deck', function() {
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });

});