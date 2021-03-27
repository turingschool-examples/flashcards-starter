const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', function() {
  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantiate a round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return current card', function() {
    expect(round.returnCurrentCard).to.be.a('function');
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should count turns starting at 0', function() {
    expect(round.takeTurn).to.be.a('function');
    expect(round.turns).to.equal(0);
  });

  it('should count turns if correct or incorrect', function() {
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should switch current card to the next card', function() {
    expect(round.currentCard).to.equal(card1);
    round.takeTurn();
    expect(round.currentCard).to.equal(card2);
  });

  it('should store incorrect guesses', function() {
    round.takeTurn('pug');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should give feedback', function() {
    expect(round.takeTurn('pug')).to.equal('Incorrect!');
  });

  it('should calculate percent of correct guesses', function() {
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should end round', function() {
    round.takeTurn('sea otter');
    expect(round.endRound).to.be.a('function');
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
  });

});
