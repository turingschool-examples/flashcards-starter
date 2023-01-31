const chai = require('chai');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck;
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });
});