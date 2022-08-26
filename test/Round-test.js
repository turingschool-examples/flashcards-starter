const chai = require('chai');
const expect = chai.expect;

const flashcards = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let cards;
  let deck;
  let round;

  beforeEach(() => {
    cards = 
    [
      new Card(flashcards.prototypeData[0]),
      new Card(flashcards.prototypeData[1]),
      new Card(flashcards.prototypeData[2]),
    ];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return the current card being played', () => {
    const currentCard = round.getCurrentCard();
    expect(currentCard).to.equal(deck.cards[0]);
  });

  it('should have turns start counting from 0', () => {
    expect(round.currentTurnIteration).to.equal(0);
  });

  it('should go to the next card after guessing', () => {
    round.takeTurn('object');
    expect(round.getCurrentCard()).to.equal(deck.cards[1]);
  });

  it('should update turns when guess is made', () => {
    round.takeTurn('object');
    expect(round.currentTurnIteration).to.equal(1);
  });

  it('should handle successful guess', () => {
    round.takeTurn('object');
    expect(round.answeredCardIds.correct).to.deep.equal([1]);
  });

  it('should handle unsuccessful guess', () => {
    round.takeTurn('array');
    expect(round.answeredCardIds.incorrect).to.deep.equal([{cardId: 1, guess: 'array'}]);
  });

  it('should tell user if guess is correct', () => {
    const result = round.takeTurn('object');
    expect(result).to.equal('correct!'); 
  });
  
  it('should tell user if guess is incorrect', () => {
    const result = round.takeTurn('array');
    expect(result).to.equal('incorrect!'); 
  });
  
  it('should return percent of correct guesses', () => {
    round.takeTurn('object'); 
    round.takeTurn('array'); 
    round.takeTurn('accessor method'); 
    
    const score = round.getCorrectPercentage();
    expect(score).to.equal(66.67);
  });

  it('should tell user when round is over with their score', () => {
    round.takeTurn('object'); 
    round.takeTurn('array'); 
    round.takeTurn('accessor method'); 

    const endRound = round.endRound();
    expect(endRound).to.equal(`**Round over!**You answered 66.67% of the questions correctly!`);
  });
})