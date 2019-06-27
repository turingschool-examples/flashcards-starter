const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const prototypeData = require('../src/data.js')

describe('Game', function() {

  it('should be a function', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });
  describe('currentRound', () => { 
  it('should keep track of the current round', () => {
    const card = new Card(prototypeData[1]);
    console.log(prototypeData)
    console.log(prototypeData[{}])
    const deck = new Deck(card);
    const round = new Round(deck);
    const game = new Game(round);
    
    expect(game.currentRound()).to.eql(1);
  });
});
});