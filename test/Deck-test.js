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

  it('should be a new instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be initialized with an array of card objects', function() {
    const card1 = new Card(1, 'What is Tom\'s favorite music genre?', ['techno', 'house', 'classic rock'], 'techno');
    const card2 = new Card(2, 'What is Tom\'s favorite live music venue?', ['The Fillmore', 'Red Rocks', 'Mission Ballroom'], 'Red Rocks');
    const card3 = new Card(3, 'How many times has Tom seen Bassnectar perform live?', [4, 13, 25], 25);
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the number of cards in the deck', function() {
    const card1 = new Card(1, 'What is Tom\'s favorite music genre?', ['techno', 'house', 'classic rock'], 'techno');
    const card2 = new Card(2, 'What is Tom\'s favorite live music venue?', ['The Fillmore', 'Red Rocks', 'Mission Ballroom'], 'Red Rocks');
    const card3 = new Card(3, 'How many times has Tom seen Bassnectar perform live?', [4, 13, 25], 25);
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });

});