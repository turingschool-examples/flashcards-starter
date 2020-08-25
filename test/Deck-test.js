const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    
    const deck = new Deck();
    
    expect(deck).to.be.an.instanceof(Deck);

  });

  it('should store an array of cards', function() {

    const card1 = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris");
    const card2 = new Card(2, "Guess who?", ["Chris", "Jeff"], "Jeff");

    const deck = new Deck([card1, card2]);

    expect(deck.deck).to.eql([card1, card2]);
  });  

  it('should be able to count the cards', function() {
    const card1 = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris");
    const card2 = new Card(2, "Guess who?", ["Chris", "Jeff"], "Jeff");

    const deck = new Deck([card1, card2]);

    expect(deck.countCards()).to.equal(2)
  });
});