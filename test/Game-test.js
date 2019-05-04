const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Game', function () {

  it('should be a function', function () {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of the Game class', function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

});






//refactor all tests
//let card, turn (or ehatever on each page);
//beforeEach(function() {
  //all of the repetiive instantiations
//})