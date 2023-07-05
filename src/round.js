const { evaluateGuess } = require('../src/card');

function createRound(deck) {
  return {
    deck: deck.cards,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: []
  }
}

function takeTurn(guess, round) {
  const answer = round.currentCard.correctAnswer
  if (guess !== answer) {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  const currentIndex = round.deck.indexOf(round.currentCard);
  if (currentIndex < round.deck.length - 1) {
    round.currentCard = round.deck[currentIndex + 1];
    round.turns++;
  }
    return evaluateGuess(guess, answer)
}

function calculatePercentageCorrect(round) {
  const percent = Math.round((1 - (round.incorrectGuesses.length / round.turns)) * 100)
  return `${percent}%`
}

function endRound(round) {
  const percent = calculatePercentageCorrect(round)
  return `** Round over! ** You answered ${percent} of the questions correctly!`
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentageCorrect, 
  endRound

}