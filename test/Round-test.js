const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the current card from the deck', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'hell yeah, there friend!');
    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should increment this.turns by one', function() {
    const round = new Round();
    expect(round.turns).to.equal(0);
    round.turnCounter();
    expect(round.turns).to.equal(1);
  }); 
});