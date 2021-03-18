const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

//   it('should be able to create cards', function() {
//       const game = new Game();
//       game.start();
//       game.printMessage();
//       game.printQuestion();
//       expect(1).to.be(2);
//   })
});