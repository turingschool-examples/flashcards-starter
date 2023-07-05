function createRound(decks) {
  return {
    deck: decks,
    currentCard: decks[0],
    turns: 0,
    incorrectGuess: [],
    takeTurn(guess, round) {
      if (guess) {
        console.log(round.turns)
        round.turns++
      }
    }
  }
}
// roundTurns: guess, rounds: takeTurn(guess, ranRounds)



// function takeTurn(guess, round) {
//   // console.log()
//   if (guess) {
//     round.turns++ 
//   }
// }


module.exports = {createRound}

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