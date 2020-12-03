const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1, card2, card3, card4;
  let deck;

  beforeEach(function() {
    card1 = new Card(3, 'An object allows you to define a set of related information using what kind of pairs?', ['object-subject', 'key-value', 'index-array'], 'key-value');
    card2 = new Card(5,'Which dog breed most resembles the data type that indicates a true or false value?', ['Golden Retriver', 'Cocker Spaniel', 'Sheepdog', 'Bolognese'], 'Bolognese');
    card3 = new Card(12, 'What are the two ways you can access properties of an object?', ['bracket notation and dot notation', 'bracket notation and index-array notation', 'dot notation and literal notation'], 'bracket notation and dot notation');
    card4 = new Card(30, 'What is the acronym for primitive data types?', ['BUNNS', 'STUBS', 'BUNY', 'YOLO'], 'BUNNS')
    deck = new Deck([card1, card2, card3, card4]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });
  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  })
  it('should include an array of Card objects', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3, card4]);
  })
  it('should know how many cards are in the Deck', function() {
    expect(deck.countCards()).to.equal(4);
  })
});
