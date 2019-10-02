const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Round', function() {

  it('should be a function', function() {
    const card1 = new Card();
    const card2 = new Card();
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should store the current card', function() {
    const card1 = new Card();
    const card2 = new Card();
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(card1);
  });

  it('should return the current card', function() {
    const card1 = new Card();
    const card2 = new Card();
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

   it('should store the deck', function() {
     const card1 = new Card();
     const card2 = new Card();
     const deck = new Deck([card1, card2]);
     const round = new Round(deck);
     expect(round.deck).to.equal(deck.cards);
   });

   it('should have a default of 0 turns', function() {
     const card1 = new Card();
     const card2 = new Card();
     const deck = new Deck([card1, card2]);
     const round = new Round(deck);
     expect(round.turns).to.equal(0);
   });

   it('should have 1 turn after a turn has been taken', function(){
     const card1 = new Card();
     const card2 = new Card();
     const deck = new Deck([card1, card2]);
     const round = new Round(deck);
     round.takeTurn();
     expect(round.turns).to.equal(1);
   });

   
});
