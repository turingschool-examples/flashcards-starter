const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', () => {
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 




});





// game.currentRound; // => Round {...} (The new Round object that has been instatiated)

// Your Game class should meet these other requirements:
// Should keep track of the currentRound
// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI