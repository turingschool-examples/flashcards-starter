const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck;
    expect(Deck).to.be.a('function');
  });

  it('should be a new instance of a deck', function() {
    const deck = new Deck;
      expect(deck).to.be.a.instanceOf(Deck);
  });

  it('should be initialized with a new array of Card objects', function() {
    const antCard = new Card(1, 'How many ants are there for every human in the world?', ['two billion', 'one hundred', 'one million'], 'one million');
    const octopusCard = new Card(2, 'How many hearts does an octopus have?', ['five', 'one', 'three'], 'three');
    const viperCard = new Card(3, 'How many times over could a gram of king cobra venom kill a human?', ['could not kill a human', 'once', '150 times'], '150 times');
    const deck = new Deck([antCard, octopusCard, viperCard]);
    expect(deck.cards).to.deep.equal([antCard, octopusCard, viperCard])
  });

  it('should calculate how many cards are in a deck', function() {
    const antCard = new Card(1, 'How many ants are there for every human in the world?', ['two billion', 'one hundred', 'one million'], 'one million');
    const octopusCard = new Card(2, 'How many hearts does an octopus have?', ['five', 'one', 'three'], 'three');
    const viperCard = new Card(3, 'How many times over could a gram of king cobra venom kill a human?', ['could not kill a human', 'once', '150 times'], '150 times');
    const deck = new Deck([antCard, octopusCard, viperCard]);
    expect(deck.countCards()).to.equal(3);
  });
});
