const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck containing the cards array', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should have a method to return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should start with a value of 0 for turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have a way to store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should have a take turn method that increases the turn count', function() {
    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(2);
  });

  it('should have a take turn method that evaluates guesses and gives feedback', function() {
    expect(round.takeTurn('pug')).to.equal('Incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('Correct!');
  });

  it('should have a take turn method stores the ids of incorrect guesses', function() {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('spleen');
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([card2.id]);
  });

  it('should use next card as current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
    round.takeTurn('pug');
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should have a method that returns percent correct', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should have a method that ends the round and prints messgae to console', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});
