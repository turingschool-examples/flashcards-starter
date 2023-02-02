const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', () => {
  let game;
  let card1
  beforeEach(() => {
    card1 = new Card(2, 'What is a comma-separated list of related values?', [ 'array', 'object', 'function' ], 'array')
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should make a new deck out of card objects', () => {
    let deck = game.makeDeck();
    expect(deck).to.be.instanceOf(Deck);
    expect(deck.cards).to.have.a.lengthOf(30);
    
    expect(deck).to.contain.an('object');
    expect(deck.cards[1]).to.be.instanceOf(Card);
    expect(deck.cards[1]).to.deep.equal(card1);
  });
});