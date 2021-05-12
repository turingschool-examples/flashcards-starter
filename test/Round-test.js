const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
// const Round = require('../src/Round');

describe('Round', function() {
  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });
  it.skip('should be an instances of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round)
  });
  it.skip('should ', function() {

  });
});
