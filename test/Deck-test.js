const expect = require('chai').expect;
const Card = require('../src/Card');
const Turn = require('../src/Turns');
const Deck = require('../src/Deck');
describe('Deck', function() {
  it('should instatiate a new deck', function() {
    let deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck)
  })



})
