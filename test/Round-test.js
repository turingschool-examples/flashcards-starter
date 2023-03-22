const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
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

  it('should start with zero turns', function() {
    expect(round.turns).to.equal(0);
  }); 

  it('should have an array of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  }); 

  it('should have a deck of cards', function() {
    expect(round.deck).to.equal(deck.cards);
  }); 

  it('should have a method that returns the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turn count', function() {
    round.takeTurn();
    expect(round.turns).to.equal(1);
    round.takeTurn();
    expect(round.turns).to.equal(2);
  }); 

  it('should update the current card to the next in the deck', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card3);
  }); 

  it('should push id of an incorrect guess to the array', function() {
    round.takeTurn('pug');
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.equal(1);
    round.takeTurn('gallbladder');
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.equal(1);
    round.takeTurn('Lex');
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.incorrectGuesses[1]).to.equal(12);
  });  

  it('should calculate the percent of correct answers', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('Lex');
    expect(round.calculatePercentCorrect()).to.equal(33)
  });

  it('should have an end round method that prints to the console', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('Lex');
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  });
});