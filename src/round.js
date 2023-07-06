const { evaluateGuess } = require('../src/card');

function createRound(decks) {
  let rounds = {
    deck: decks,
    currentCard: decks[0],
    turns: 0,
    incorrectGuess: [],
  }
  return rounds;
}

function takeTurn(guess, round) {
  let correctAnswer = round.currentCard.answer;
  let result = evaluateGuess(guess, correctAnswer);
  if (result === 'Incorrect!') {
    round.incorrectGuess.push(round.currentCard.id);
  }
  round.turns++
  round.currentCard = round.deck[round.turns];
  return result;
}

function calculatePercentCorrect(round) {
  let percent = ((round.turns - round.incorrectGuess.length)/round.turns) * 100
  console.log(round.turns)
  return percent
}

module.exports = {createRound, takeTurn, calculatePercentCorrect}

// const chai = require('chai');
// const expect = chai.expect;
// const assert = chai.assert;
// const cardDeck = require('../src/data')

// const { createRound } = require('../src/round')
// const { createCard } = require('../src/card')
// const { createDeck } = require('../src/deck')
// describe('deck', function() {
//     const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
//     const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
//     const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 
// 'playing with bubble wrap');
    
//     const deck = createDeck([card1, card2, card3]);
//     const round = createRound(deck);
//     it('should be a function', function() {
    
//     });
// it('should hold deck of cards', function() {
//   assert.deepEqual(round.deck, deck)
// });

// it('should start turn at 0', function() {
//   assert.deepEqual(round.turn, 0);
// });

// it('should start with an empty list of incorrect guesses', function() {
//   assert.deepEqual(round.incorrectGuesses, []);
// })

// it('should start with first card in the deck', function(){
//   assert.deepEqual(round.currentCard, card1)

// })
// });