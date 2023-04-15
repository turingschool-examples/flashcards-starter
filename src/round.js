const { evaluateGuess, giveFeedback } = require('./turn');

function createRound(deck) {
  return {
    deck: deck.cards,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: 0
  }
}

function takeTurn(guess, round) {
  const result = evaluateGuess(guess, round.currentCard.correctAnswer);
  
  if (!result) {
    round.incorrectGuesses++;
  }

  round.turns++;
  round.currentCard = round.deck[round.turns];
  return giveFeedback(result);
}

function calculatePercentCorrect(round) {
  return (round.turns - round.incorrectGuesses)/round.deck.length * 100;
}

function endRound(round) {
  console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`);
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
};