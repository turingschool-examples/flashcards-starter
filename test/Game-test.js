const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round1;
  let turn1;
  let turn2;
  let turn3;
  let game;
  let game2;


  beforeEach(() => {
    game2 = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of round', function() {
    expect(game2).to.be.an.instanceof(Game);
  }); 
});