const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Round', () => {

  it.skip('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    const card1 = new Card();
    const card2 = new Card();
    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should have the first card of the deck saved', () => {});

});