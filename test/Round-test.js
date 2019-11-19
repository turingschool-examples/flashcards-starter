const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');



describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  })
})