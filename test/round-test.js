const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('./src/card.js');
const { evaluateGuess } = require('./src/turn.js');
const { createDeck } = require('./src/deck.js');
const { createRound } = require('./src/round.js');
const { takeTurn } = require('./src/round.js');
const { calculatePercentCorrect } = require('./src/round.js');
const { showRoundResult } = require('./src/round.js');


describe('round', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should contain the deck object', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.deck).to.deep.equal([
      {
        id: 1,
        question: 'What is Robbie\'s favorite animal',
        answers: ['sea otter', 'pug', 'capybara'],
        correctAnswer: 'sea otter'
      },
      {
        id: 14,
        question: 'What organ is Khalid missing?',
        answers: ['spleen', 'appendix', 'gallbladder'],
        correctAnswer: 'gallbladder'
      },
      {
        id: 12,
        question: 'What is Travis\'s favorite stress reliever?',
        answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
        correctAnswer: 'playing with bubble wrap'
      },
    ]);
  });

  it('should start with currentCard as the first card in the deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.currentCard).to.deep.equal(
      {
        id: 1,
        question: 'What is Robbie\'s favorite animal',
        answers: ['sea otter', 'pug', 'capybara'],
        correctAnswer: 'sea otter'
      });
  });

  it('should start at 0 turns', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.turns).to.equal(0);
  });

  it('should start with 0 incorrect guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should update the turns count when a guess is made and next card becomes current card', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    takeTurn('sea otter', round);
    takeTurn('appendix', round);

    expect(round.turns).to.equal(2);
    expect(round.currentCard).to.deep.equal(card3);
  });

  it('should store incorrect guesses during a round', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    takeTurn('pug', round);
    takeTurn('appendix', round);

    expect(round.incorrectGuesses).to.deep.equal([card2.id, card3.id]);
  });

  it('should give feedback if the guess is correct', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(evaluateGuess('sea otter', round.currentCard.correctAnswer)).to.deep.equal('correct!');
  });

  it('should give feedback if the guess is incorrect', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(evaluateGuess('pug', round.currentCard.correctAnswer)).to.deep.equal('incorrect!');
  });

  it('should calculate and return percentage of correct guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    round.turns = 12;
    round.incorrectGuesses = ['answer1', 'answer2', 'answer3'];

    expect(calculatePercentCorrect(round)).to.equal(75);
  });

  it('should notify player when the round is over', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    round.turns = 12;
    round.incorrectGuesses = ['answer1', 'answer2', 'answer3'];

    expect(showRoundResult(round)).to.equal('** Round over! ** You answered 75% of the questions correctly!');
  });
});