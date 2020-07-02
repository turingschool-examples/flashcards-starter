const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should have a property of turns that defaults to 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have a property of incorrect guesses, that defaults to an empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  describe('takeTurn', function() {
     it('should increment the turns property', function() {
       round.takeTurn();
       expect(round.turns).to.equal(1);
       round.takeTurn();
       expect(round.turns).to.equal(2);
     });

     it('should change currentCard to the next card', function() {
       round.takeTurn();
       expect(round.returnCurrentCard()).to.equal(card2);
       round.takeTurn();
       expect(round.returnCurrentCard()).to.equal(card3);
     });

     it('should return appropriate feedback', function() {
       const happyFeedback = round.takeTurn('sea otter');
       expect(happyFeedback).to.equal('correct!');
       const sadFeedback = round.takeTurn('spleen');
       expect(sadFeedback).to.equal('incorrect!');
     });

  });

});
