const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Round', () => {

  it.skip('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

});