const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Round', () => {
  let card1, card2, card3, cards, deck, round;

  beforeEach(() => {
    card1 = new Card();
    card2 = new Card();
    card3 = new Card();
    cards = [card1, card2, card3];

    deck = new Deck(cards);

    round = new Round(deck);
  });

  it('should be a function', () => expect(Round).to.be.a('function'));

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should have the first card of the deck saved', () => {});

});