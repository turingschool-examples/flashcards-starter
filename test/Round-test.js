const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
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

  it('should take in a deck of cards and know the current card', function() {
    const cardA = new Card();
    const cardB = new Card();
    const cardC = new Card();
    const deckA = new Deck([cardA, cardB, cardC]);
    const round = new Round(deckA);
    expect(round.deck).to.equal(deckA);
    expect(round.returnCurrentCard()).to.equal(deckA.cards[0]);
    expect(round.returnCurrentCard()).to.equal(cardA);
  });

  it('should have a turns counter', function() {
    const round = new Round();
    expect(round.turns).to.equal(0);
  });

  it('should store incorrect guesses in an array', function() {
    const round = new Round();
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should update the turns counter when a turn is taken', function() {
    const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cardB = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cardC = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deckA = new Deck([cardA, cardB, cardC]);

    const round = new Round(deckA);

    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter');

    expect(round.turns).to.equal(1);
  });

  it('should create a new Turn instance when a turn is taken, with the respective guess and card', function() {
    const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cardB = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cardC = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deckA = new Deck([cardA, cardB, cardC]);

    const round = new Round(deckA);

    round.takeTurn('sea otter');

    expect(round.currentTurn).to.be.an.instanceof(Turn);
    expect(round.currentTurn.userGuess).to.equal('sea otter');
    expect(round.currentTurn.currentCard).to.equal(cardA);
  });

  it('should move on to the next card after a guess', function() {
    const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cardB = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cardC = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deckA = new Deck([cardA, cardB, cardC]);

    const round = new Round(deckA);

    expect(round.returnCurrentCard()).to.equal(cardA);

    round.takeTurn('sea otter');

    expect(round.returnCurrentCard()).to.equal(cardB);
  });

  it('should evaluate whether a guess is correct or incorrect', function() {
    const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cardB = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cardC = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deckA = new Deck([cardA, cardB, cardC]);

    const round = new Round(deckA);

    round.takeTurn('sea otter');

    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('sea otter');

    expect(round.incorrectGuesses).to.deep.equal([cardB]);
  });

  it('should provide feedback on whether the guess is correct or incorrect', function() {
    const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cardB = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cardC = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deckA = new Deck([cardA, cardB, cardC]);

    const round = new Round(deckA);

    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('aminalz')).to.equal('incorrect!');
  });

  it('should be able to calculate the percent', function() {
    const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cardB = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cardC = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deckA = new Deck([cardA, cardB, cardC]);

    const round = new Round(deckA);

    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(100);

    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(50);

    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should be able to end a round', function() {
    const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cardB = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cardC = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deckA = new Deck([cardA, cardB, cardC]);

    const round = new Round(deckA);

    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(100);

    expect(round.endRound()).to.equal( '** Round over! ** You answered 100% of the questions correctly!');

    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(50);

    expect(round.endRound()).to.equal( '** Round over! ** You answered 50% of the questions correctly!');

    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(33);

    expect(round.endRound()).to.equal( '** Round over! ** You answered 33% of the questions correctly!');
  });
});
