const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store the deck of cards in play', function() {
    expect(round.deck).to.deep.equal(cards);
  });

  it('should store the first card in the deck as the current card', function() {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('returnCurrentCard should be a method on Round', function() {
    expect(round.returnCurrentCard).to.be.a('function');
  });

  it('should be able to return the current card', function() {
    const result = round.returnCurrentCard();
    expect(result).to.deep.equal(card1);
  });

  it('should store the turn count, which is initially 0', function() {
    expect(round.turnsCount).to.equal(0);
  });

  it('should update the turn count when a turn is taken', function() {
    expect(round.turnsCount).to.equal(0);
    round.takeTurn('pug');
    expect(round.turnsCount).to.equal(1);
    round.takeTurn('sea otter');
    expect(round.turnsCount).to.equal(2);
  });

  it('takeTurn should be a method on Round', function() {
    expect(round.takeTurn).to.be.a('function');
  });

  it('should update the current card to the next card in the deck after a turn is taken', function() {
    const result = round.returnCurrentCard();
    expect(result).to.deep.equal(card1);
    round.takeTurn('pug');
    const result2 = round.returnCurrentCard();
    expect(result2).to.deep.equal(card2);
    round.takeTurn('gallbladder');
    const result3 = round.returnCurrentCard();
    expect(result3).to.deep.equal(card3);
  });

  it('should instantiate a new Turn instance when a guess is made on the current card', function() {
    round.takeTurn('pug');
    const turn1 = new Turn('pug', card1);
    turn1.evaluateGuess();
    expect(round.turns[0]).to.deep.equal(turn1);
    round.takeTurn('appendix');
    const turn2 = new Turn('appendix', card2);
    turn2.evaluateGuess();
    expect(round.turns[1]).to.deep.equal(turn2);
  });

  it('should be able to evaluate the guess and store the result when a turn is taken', function() {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('pug');
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.equal(1);
    round.takeTurn('appendix');
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.incorrectGuesses[1]).to.equal(14);
    round.takeTurn('listening to music');
    expect(round.incorrectGuesses.length).to.equal(3);
    expect(round.incorrectGuesses[2]).to.equal(12);
  });

  it('should be able to return the feedback of whether the guess is correct or incorrect when a turn is taken', function() {
    const result = round.takeTurn('pug');
    expect(result).to.equal('incorrect!');
    const result2 = round.takeTurn('gallbladder');
    expect(result2).to.equal('correct!');
    const result3 = round.takeTurn('listening to music');
    expect(result3).to.equal('incorrect!');
  });

  it('calculatePercentCorrect should be a method on Round', function() {
    expect(round.calculatePercentCorrect).to.be.a('function');
  });

  it('should be able to calculate and return the percentage of correct guesses', function() {
    round.takeTurn('pug');
    const percentageResult = round.calculatePercentCorrect();
    expect(percentageResult).to.equal(0);
    round.takeTurn('gallbladder');
    const percentageResult2 = round.calculatePercentCorrect();
    expect(percentageResult2).to.equal(50);
    round.takeTurn('listening to music');
    const percentageResult3 = round.calculatePercentCorrect();
    expect(percentageResult3).to.equal(33);
  });

  it('endRound should be a method on Round', function() {
    expect(round.endRound).to.be.a('function');
  });

  it('should print a response when the round is over', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music');
    const result = round.endRound();
    expect(result).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  });
});
