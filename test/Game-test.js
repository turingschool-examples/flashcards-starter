const chai = require('chai');
const expect = chai.expect;

const {printMessage, printQuestion, start} = require('../src/game');

describe('Game Start', function() {
  it.skip('should create a deck', function() {
    const deck = initiateDeck();

    expect(deck).to.deep.equal();
  })
})