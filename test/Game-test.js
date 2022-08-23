const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', () => {
  it ('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  
});
