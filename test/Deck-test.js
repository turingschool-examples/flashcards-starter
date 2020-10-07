const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'You live in a one story house made entirely of redwood. What color would the stairs be?', ['wood', 'red', 'What stairs? You live in a one-story house'], 'What stairs? You live in a one-story house');

    card2 = new Card(2, 'I am not alive, but I grow; I don\'t have lungs, but I need air; I don\'t have a mouth, but water kills me. What am I?', ['ice', 'fire', 'pants'], 'fire');

    card3 = new Card(3, 'What belongs to you, but other people use it more than you?', ['your name', 'your money', 'your internet'], 'your name');

    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should initialize with an array of Cards', function() {
    expect(deck.cardSet).to.deep.equal([card1, card2, card3]);
  })
  it('should know how many Cards are in the Deck', function() {

  deck.countCards();

  expect(deck.countCards()).to.deep.equal(3);
  })
})
