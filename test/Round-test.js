const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
  const round = new Round();
  expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to return the current card being played', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);
  expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should be able to give feedback when a guess is made', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should be able to evaluate/record a correct guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck);
    round.takeTurn('sea otter');
    expect(round.correctGuesses).to.deep.equal([1]);
  });

  it('should be able to evaluate/record an incorrect guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck);
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should be able to update the turns count when a guess is made', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck);
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it('should make the next card the current card after a turn has been made', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should be able to calculate and return the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('sea otter');
    round.takeTurn('appendix');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should be able to print a message to the console when a the game is over', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('sea otter');
    round.takeTurn('appendix');
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the answers correctly!');
  });

});
