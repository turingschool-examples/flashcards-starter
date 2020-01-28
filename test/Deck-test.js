const chai = require('chai');
const expect = chai.expect;
var assert = require('chai').assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
    expect(deck).to.be.an.instanceof(Deck);
  });

});
