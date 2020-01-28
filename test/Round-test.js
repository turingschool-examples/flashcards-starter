const chai = require('chai');
const expect = chai.expect;
var assert = require('chai').assert;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const deck = new Round();

    expect(Round).to.be.a('function');
    expect(deck).to.be.an.instanceof(Round);
  });

});
