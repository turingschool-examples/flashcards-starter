const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Game', function() {

it('should be a funcion', function() {
const game = new Game();
expect(Game).to.be.a('function');
});

it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

});

