const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Game', () => {
  beforeEach(() => {
    game = new Game()
  })

  it('should be a function', () => expect(Game).to.be.a('function'));

  it('should keep track of the current round', () => {
    expect(game.currentRound()).to.equal(0);
    expect(game.currentRound()).to.equal(1);
    expect(game.currentRound()).to.equal(2);
  })

  it('should have a method that creates cards', () => {
    expect(game.createCards()).to.deep.equal(prototypeQuestions) 
   
  })

  it('should have a method that puts cards in a deck', () => {
    expect(game.createDeck()).to.deep.equal({ cards: undefined })
  })
})