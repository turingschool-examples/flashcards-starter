const chai = require('chai');
const expect = chai.expect;

// const Round = require('../src/Round');
// const Turn = require('../src/Turn');
// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {

  it('Should keep track of the currentRound', function() {

    let game = new Game();
    game.start();
    console.log("Hello!");
    console.log(game.currentRound);

    game.currentRound.takeTurn('sea otter', 1);
    
    expect(game.currentRound.endRound()).to.equal(`Round over! You answered ${game.currentRound.percentageCorrect} of the questions correctly!`);
  });
});