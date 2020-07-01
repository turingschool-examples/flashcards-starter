const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it("should be an instance of Round", () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });


});