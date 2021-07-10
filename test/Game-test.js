const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Deck');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
    //game.start();
  });

  it('should have a way to keep track of the current round', () => {
    game.currentRound;
    expect(game.currentRound).to.equal(null);
  });
 });
