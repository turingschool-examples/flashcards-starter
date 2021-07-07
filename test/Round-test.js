const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;
  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('it should return the first card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start number of turns at 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should keep track of incorrect guesses', () => {
    expect(round.incorrectGuesses).to.be.an('array');
  });

  it('should return if the guess is correct or incorrect', () => {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
  });

  it('should keep track of the number of turns that have passed', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.turns).to.equal(2);
  });

  it('should store card id of incorrect guesses', () => {
    round.takeTurn('pug');
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.eql([1, 14]);
  });

  it('should calculate and return the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should move to next card after turn and return new current card', () => {
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.equal(card2);
  });
});
