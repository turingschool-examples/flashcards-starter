const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Data = require('../src/Data');
const Round = require('../src/Round');


describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should be instantiated with a Deck', () => {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck)
  })

  it('should return current card being played', () => {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })

});