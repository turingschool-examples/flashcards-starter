const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have a method that test the number of cards in the Deck', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, guy!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah, guy!'], 'hell yeah, guy!');
    const cards = [card1, card2];
    const round = new Round(cards);
    expect(round.countCards()).to.equal(2);
  });   
});