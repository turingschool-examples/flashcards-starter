const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Deck');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });


});
