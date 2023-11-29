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
  let card1, card2, card3, deck, round;
  beforeEach(function () {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    card3 = createCard(17, 'What does the reduce() method take in?', ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'], 'callback function and initializer');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should update the round and its properties after each turn', function() {
    const guess1 = 'object';
    const guess2 = 'mutator method';

    const firstTurn = takeTurn(guess1, round);

    expect(firstTurn).to.equal("Correct!");
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.currentCard).to.deep.equal({
           id: 5,
           question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
           answers: ['mutator method', 'accessor method', 'iteration method'],
           correctAnswer: 'iteration method'
         });

    const secondTurn = takeTurn(guess2, round);

    expect(secondTurn).to.equal("Incorrect!");
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([5]);
    expect(round.currentCard).to.deep.equal({
           id: 17,
           question: 'What does the reduce() method take in?',
           answers: ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'],
           correctAnswer: 'callback function and initializer'
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