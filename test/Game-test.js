const chai = require('chai');
const expect = chai.expect;


const Game = require('../src/Game');



describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });
   it('Start Game Should be a function', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });
  it('should create cards and put them in a deck', function() {
    const game = new Game();
    game.start()
    expect(game.cards).to.equal(data.prototypeQuestions);
    expect(game.start).to.be.a('array');
  });
});