const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turns');
const { createDeck, countCards } = require('../src/deck');

function createRound(deck) {
  return {
    deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
    takeTurn(guess) {
      const feedback = evaluateGuess(guess, this.currentCard.correctAnswer);
      this.turns++;
      
      if (feedback === 'incorrect!') {
        this.incorrectGuesses.push(this.currentCard.id);
      }
      
      this.currentCard = this.deck[this.turns];
      
      return feedback;
    },
    calculatePercentCorrect() {
      const totalCards = this.turns;
      const correctGuesses = totalCards - this.incorrectGuesses.length;
      return (correctGuesses / totalCards) * 100;
    },
    endRound() {
      const percentCorrect = this.calculatePercentCorrect();
      console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
    }
  };
}

module.exports = {
    createCard,
    createDeck,
    evaluateGuess,
    createRound,
  };
  