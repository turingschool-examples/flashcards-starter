const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { evaluateGuess } = require('../src/turn');


describe('createRound', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a round and its properties', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);

    const round = createRound(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.deep.equal({
           id: 1,
           question: 'What is Robbie\'s favorite animal',
           answers: ['sea otter', 'pug', 'capybara'],
           correctAnswer: 'sea otter'
         });
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });  
});

describe('takeTurn', function() {
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should update the round and its properties after each turn', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    const guess1 = 'sea otter';
    const guess2 = 'spleen';

    const firstTurn = takeTurn(guess1, round);

    expect(firstTurn).to.equal("Correct!");
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.currentCard).to.deep.equal({
           id: 14,
           question: 'What organ is Khalid missing?',
           answers: ['spleen', 'appendix', 'gallbladder'],
           correctAnswer: 'gallbladder'
         });

    const secondTurn = takeTurn(guess2, round);

    expect(secondTurn).to.equal("Incorrect!");
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([14]);
    expect(round.currentCard).to.deep.equal({
           id: 12,
           question: 'What is Travis\'s favorite stress reliever?',
           answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
           correctAnswer: 'playing with bubble wrap'
         });
  });  
});  
  




  // it('should declare correct if user guess is correct', function() {
  //   const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  //   const deck = createDeck([card1, card2, card3]);
  //   const round = createRound(deck);
  //   const guess = 'sea otter';

  //   const firstTurn = takeTurn(guess, round);

  //   expect(firstTurn).to.equal('Correct!');
  // });  

  // it('should declare incorrect if user guess is incorrect', function() {
  //   const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  //   const deck = createDeck([card1, card2, card3]);
  //   const round = createRound(deck);
  //   const guess = 'pug';

  //   const firstTurn = takeTurn(guess, round);

  //   expect(firstTurn).to.equal('Incorrect!');
  // }); 












// describe('', function() {
//   it.skip('', function() {
//     expect().to.be.a('function');
//   });

//   it.skip('should...', function() {
//     //SETUP
//     //EXECUTION
//     //ASSERTION
//   });  
// });