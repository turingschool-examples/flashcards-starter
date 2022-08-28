const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/deck');


describe('Game', function() {

it('should keep track of the current round', () => {
    const card = new Card(1, 'What animal is cuter, a puppy or a kitten?', ['puppy', 'kitten'], 'puppy')
    const deck = new Deck([card])
    const round = new Round(deck)
    const game = new Game(round);
    
    expect(game.currentRound).to.deep.equal(round)
  });
});