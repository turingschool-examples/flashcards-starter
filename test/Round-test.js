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

// remove lines 61-67 before submission
   it.skip('should instantiate a new turn', function() {
     const card1 = new Card();
     const card2 = new Card();
     const deck = new Deck([card1, card2]);
     const round = new Round(deck);
     expect(round.takeTurn('nothing')).to.be.instanceof(Turn);
   });

   it('should move to the next card after a guess', function() {
     const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
     const card2 = new Card(2, 'What is my favorite color?', ['blue', 'green', 'red'], 'blue');
     const deck = new Deck([card1, card2]);
     const round = new Round(deck);
     round.takeTurn();
     expect(round.currentCard).to.equal(card2);
   });

   it('should store the card id of incorrect guesses', function() {
     const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
     const deck = new Deck([card1]);
     const round = new Round(deck);
     round.takeTurn('I have no clue');
     expect(round.incorrectGuesses[0]).to.equal(card1.id);
   });

   it('should return feedback on the guess', function() {
     const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
     const deck = new Deck([card1]);
     const round = new Round(deck);
     round.takeTurn('I have no clue');
     expect(turn.giveFeedback()).to.deep.equal('incorrect!');
   });

});
