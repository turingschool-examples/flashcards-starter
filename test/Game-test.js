const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game, round, deck, card1, card2, card3;

  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',['object', 'array', 'function'],'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?',['array', 'object', 'function'],'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'],'mutator method');
    const deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round);
  })

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('Should be an instance of a Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('Should have a default current round of undefined', () => {
    expect(game.currentRound).to.equal(undefined);
  });

});
