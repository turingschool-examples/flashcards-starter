const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');
const Round = require('../src/round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });


});
