const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Card', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });


});
