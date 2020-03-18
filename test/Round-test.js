const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should accept the deck of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    // const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    // expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    expect(round.deck).to.deep.equal([card1, card2, card3]);

    var currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);
    console.log(currentCard)
  });

  it('should increase the amount of turns taken each time a turn is made', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    const turn = new Turn();

    round.returnCurrentCard();
    turn.returnGuess();
    expect(round.turns).to.equal(0);
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it('should keep track of incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    const turn = new Turn();

    round.returnCurrentCard();
    turn.returnGuess();
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should give feedback on the guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards);
    const turn = new Turn();

    round.returnCurrentCard();
    turn.returnGuess();
    // expect(round.incorrectGuesses).to.deep.equal([]);
    console.log(round.checkAnswer);
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
  });

  it('should calculate and return the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const deck = new Deck([card1, card2]);
    const round = new Round(deck.cards);
    const turn = new Turn();

    round.returnCurrentCard();
    turn.returnGuess();
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('appendix');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should return a message of percentage answered correctly at the end', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const deck = new Deck([card1, card2]);
    const round = new Round(deck.cards);
    const turn = new Turn();

    round.returnCurrentCard();
    turn.returnGuess();
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('appendix');
    expect(round.calculatePercentCorrect()).to.equal(50);
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  });
});
