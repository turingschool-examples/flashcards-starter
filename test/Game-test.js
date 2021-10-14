const Game = require('../src/Game');
const expect = require('chai').expect;

describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function')
  });
});
